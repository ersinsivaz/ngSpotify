import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import { SpotifyService } from '../../services/spotify.service';


import {Artist} from '../../models/artist';
import {Album} from '../../models/album';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute,private _location:Location){

    }

    ngOnInit(){
        this._route.params
            .map(params =>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getArtist(id)
                    .subscribe(artist=>{
                        this.artist=artist;
                       
                    })
                this._spotifyService.getAlbums(id)
                    .subscribe(albums=>{
                        this.albums=albums.items;
                        console.log(this.albums);
                    })
            })
    }

}