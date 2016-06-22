import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {UserService} from './services/user.service';
import {CountryService, ICountry} from './../common';

@Component({
    moduleId: module.id,
    selector: 'registration-component',
    template: require('./registration.component.html'),
    providers: [UserService, CountryService]
})
export class RegistrationComponent {
    public error: string;
    public countries: Array<ICountry> = [];
    constructor(private countryService: CountryService) { }
    ngOnInit() {
        this.countryService.getCountries()
            .subscribe(countries => this.countries = countries)
    }

    // register(email: string, password: string, country: string) {
    //     this.userService.register(email, password, country)
    //         .subscribe(user => {
    //             this.router.navigateByUrl("/");
    //         }, error => {
    //             this.error = error;
    //         });
    // }

}
