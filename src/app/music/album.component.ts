import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { MusicService } from './services/music.service';
import { IAlbum, AlbumImageSize } from './model/ialbum';
import { BottomPanelComponent } from './../common';

@Component({
    moduleId: module.id,
    selector: 'album-component',
    template: require('./album.component.html'),
    directives: [BottomPanelComponent],
    providers: [MusicService]
})
export class AlbumComponent {
    public album: IAlbum;
    private imageSize: AlbumImageSize = AlbumImageSize.LARGE;
    constructor(private routeParams: RouteParams, private musicService: MusicService) {
        this.getAlbumInfo(routeParams.get('id'));
    }
    getAlbumInfo(id: string) {
        this.musicService.albumInfo(id)
            .subscribe(album => {
                this.album = album;
                var image = this.album.getImage(this.imageSize);
            })
    }
}
