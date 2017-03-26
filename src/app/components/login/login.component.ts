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

  constructor(private af:AngularFire){
    console.log(af);
  }//ctor

  ngOnInit(){
    this.af.auth.subscribe(authState=>{
      if(!authState){
        console.log("Not logged in");
      } 
      else {
        console.log("Logged in",authState);
        this.displayName=authState.auth.displayName;
        this.photoUrl=authState.auth.photoURL;
      }
    });
  }//.ngOnInit

  loginFacebook(){
    this.af.auth.login({
      provider:AuthProviders.Facebook,
      method:AuthMethods.Popup
    }).then(authState=>{
      console.log("After Login",authState);
    });
  }//.loginFacebook

  loguotFacebook(){
    this.af.auth.logout();
    this.displayName=null;
    this.photoUrl=null;
  }//.loguotFacebook

}