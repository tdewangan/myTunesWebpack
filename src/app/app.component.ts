import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import '../style/app.scss';
import { WelcomeComponent, HeaderComponent, BottomPanelComponent, PaginationComponent, SearchComponent } from './common';
import { AlbumComponent, AlbumsComponent } from './music';
import { LoginComponent, RegistrationComponent } from './user';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [],
  directives: [...ROUTER_DIRECTIVES, WelcomeComponent, HeaderComponent, BottomPanelComponent, PaginationComponent,
    SearchComponent, AlbumComponent, AlbumsComponent, LoginComponent, RegistrationComponent],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  { path: '/', component: WelcomeComponent, name: 'Welcome', useAsDefault: true },
  { path: '/albums', component: AlbumsComponent, name: 'Albums' },
  { path: '/album', component: AlbumComponent, name: 'Album' },
  { path: '/login', component: LoginComponent, name: 'Login' },
  { path: '/registration', component: RegistrationComponent, name: 'Registration' }
])
export class AppComponent {
  constructor() {
  }
}
