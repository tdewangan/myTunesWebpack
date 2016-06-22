import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

// import {ICountry} from './../models/icountry';
// import {Country} from './../models/country';

@Injectable()
export class CountryService {

    constructor(private http: Http) { }
    getCountries() {
        return this.http.get('https://restcountries.eu/rest/v1/all')
        .map((res: Response) => res.json());
    }
}
