import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {UserService} from './services/user.service';

@Component({
    moduleId: module.id,
    selector: 'login-component',
    template: require('./login.component.html'),
    providers: [UserService]
})
export class LoginComponent {
    public error: string;
    constructor(private userService: UserService, private router: Router) { }

    login(email: string, password: string) {
        // this.userService.login(email, password)
        //     .subscribe(user => {
        //         this.router.navigateByUrl("/");
        //     }, error => {
        //         this.error = error;
        //     });
    }
}
