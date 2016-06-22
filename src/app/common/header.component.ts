import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
// import { UserService, IUser } from './../user';
import { SearchComponent} from './search.component';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    template: require('./header.component.html'),
    directives: [...ROUTER_DIRECTIVES, SearchComponent],
    styles: [``]
})
export class HeaderComponent implements OnInit {
    // public user: IUser;

    constructor(private router: Router) {
        // this.userService.getUser()
        //     .subscribe(user => {
        //         this.user = user;
        //     });
    }
    search($event) {
        this.router.navigate(["Albums", { query: $event, page: 0 }]);
    }
    // logout() {
    //     this.userService.logout()
    //         .subscribe(() => {
    //             this.router.navigateByUrl("/");
    //         })
    // }
    ngOnInit() { }

}
