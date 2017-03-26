import { Component,OnInit } from '@angular/core';
import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayName:string;
  photoUrl:string;
  userName:string;
  password:string;
  loggedIn:boolean;

  constructor(private af:AngularFire){
    console.log(af);
  }//ctor

  ngOnInit(){
    this.af.auth.subscribe(authState=>{
      if(!authState){
        console.log("Not logged in");
        this.loggedIn=false;
      } 
      else {
        console.log("Logged in",authState);
        this.displayName=authState.auth.displayName;
        this.photoUrl=authState.auth.photoURL;
        this.userName=authState.auth.email;
        this.loggedIn=true;
      }
    });
  }//.ngOnInit

  loginFacebook(){
    this.af.auth.login({
      provider:AuthProviders.Facebook,
      method:AuthMethods.Popup,
      scope:['public_profile','user_friends']
    }).then((authState:any)=>{
      this.af.database.object('/users/'+authState.uid).update({
        accessToken:authState.facebook.accessToken,
        name:authState.auth.displayName,
        photoUrl:authState.auth.photoURL,
        email:authState.auth.email
      })
    });
  }//.loginFacebook

  logaout(){
    this.af.auth.logout();
    this.displayName=null;
    this.photoUrl=null;
    this.userName=null;
    this.loggedIn=false;
  }//.logaoutFacebook

  register(){
    this.af.auth.createUser({
      email:'ersinsivaz@gmail.com',
      password:'12345ss'
    })
    .then(authState=>{
      authState.auth.sendEmailVerification();
    })
    .catch(error=>console.log("REGISTER-ERROR",error));
  }//.register

  login(){
    this.af.auth.login({
      email:this.userName,
      password:this.password
    },{
      method:AuthMethods.Password,
      provider:AuthProviders.Password
    })
    .then(authState=>{
      this.loggedIn=true;
      console.log("LOGGED-IN-THEN",authState);
    })
    .catch(error=>console.log("LOGIN-ERROR",error));
  }//.login

}