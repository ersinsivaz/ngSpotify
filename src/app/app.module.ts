import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';

import {SpotifyService} from './services/spotify.service';

import { AppComponent } from './app.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import {LoginComponent} from './components/login/login.component';

export const firebaseConfig={
    apiKey: "AIzaSyArY7QKZcyckgOdWCzZTxCBPTsiFM_y9rg",
    authDomain: "pepper-d2151.firebaseapp.com",
    databaseURL: "https://pepper-d2151.firebaseio.com",
    storageBucket: "pepper-d2151.appspot.com",
    messagingSenderId: "982392637383"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ SpotifyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
