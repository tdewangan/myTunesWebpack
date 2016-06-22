import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
// import { Observable } from 'rxjs/Observable';
import { HighlightDirective } from './../common';
import { IAlbum, AlbumImageSize } from './model/ialbum';
import { MusicService } from './services/music.service';

@Component({
    moduleId: module.id,
    selector: 'albums-component',
    template: require('./albums.component.html'),
    directives: [HighlightDirective, ROUTER_DIRECTIVES],
    providers: [MusicService]
})
export class AlbumsComponent implements OnInit {
    public albums: Array<IAlbum> = [];
    public albumImageSize: AlbumImageSize = AlbumImageSize.MEDIUM;
    constructor(private musicService: MusicService, private routerParams: RouteParams) { }

    ngOnInit() {
        this.getList();
    }
    getList() {
        console.log('clicked');
        this.musicService.albumsSearch(this.routerParams.get('query'))
            .subscribe(res => {
                console.log(res);
                this.albums = res;
            });
    }
}
