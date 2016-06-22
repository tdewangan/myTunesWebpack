import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IAlbum } from './../model/ialbum';
import { ISong } from './../model/isong';
import { Album } from './../model/album';
import { Song } from './../model/song';

// Application name	mytunes
// API key	f9fcb64f9274835a5ea5e7bd7d4753af
// Shared secret	f2e8c561f4e88c507ac7bdf5dbe510bc
// Registered to	tribhuwand
@Injectable()
export class MusicService {
    private apiId = 'f9fcb64f9274835a5ea5e7bd7d4753af';
    albums: Array<IAlbum> = [];
    constructor(private http: Http) { }
    albumsSearch(query: string) {
        this.albums = [];
        let url = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + query + '&api_key=' + this.apiId + '&format=json';
        return this.http.get(url)
            .map((res: Response) => res.json())
            .map(res => res.results)
            .map(res => {
                res.albummatches.album.forEach(data => {
                    this.albums.push(new Album(data['mbid'], data['name'], data['artist'], data['url'], data['image']));
                });
                return this.albums;
            })
    }
    albumInfo(id: string) {
        var album: IAlbum;
        let url = 'http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=' + id + '&api_key=' + this.apiId + '&format=json';
        return this.http.get(url)
            .map((res: Response) => res.json())
            .map(res => res.album)
            .map(data => {
                var songs: Array<ISong> = [];
                data.tracks.track.forEach(data => {
                    songs.push(new Song(data.name));
                });
                let album: IAlbum = new Album(data['mbid'], data['name'], data['artist'], data['url'], data['image'], songs);
                return album;
            })
    }
}
