import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import { SpotifyService } from '../../services/spotify.service';

import {Artist} from '../../models/artist';
import {Album} from '../../models/album';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    id:string;
    album:Album[];

    constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute,private _location:Location){

    }//ctor

    ngOnInit(){
        this._route.params
            .map(params =>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getAlbum(id)
                    .subscribe(album=>{
                        this.album=album;
                        //console.log(album.tracks.items);
                    })
            })
    }//ngOnInit

}//cs