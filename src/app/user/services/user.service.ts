import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { IUser } from './../models/iuser';
// import { User } from './../models/user';
// import {Http, Response} from '@angular/http';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
    // firebaseUrl: string = "incandescent-heat-5108.firebaseIO.com";
    // firebaseRef: Firebase;

    // constructor() {
    //     this.firebaseRef = new Firebase(this.firebaseUrl);
    // }

    // getUser(): Observable<any> {
    //     return new Observable(observable => {
    //         this.firebaseRef.onAuth(authdata => {
    //             let authData = this.firebaseRef.getAuth();
    //             let user;
    //             if (authData) {
    //                 user = new User(authData);
    //             }
    //             observable.next(user);
    //         });
    //     });
    // }

    // login(userName: string, password: string): Observable<any> {
    //     return new Observable(observable => {
    //         this.firebaseRef.authWithPassword({
    //             email: userName,
    //             password: password
    //         }, (error, authData) => {
    //             if (error) {
    //                 observable.error(error);
    //             } else {
    //                 observable.next(new User(authData));
    //             }
    //         });
    //     });
    // }

    // register(userName: string, email: string, password: string,
    //     country?: string, birthdate?: Date): Observable<any> {
    //     return new Observable(observable => {
    //         this.firebaseRef.createUser({
    //             userName: userName,
    //             email: email,
    //             password: password
    //         }, (error, userData) => {
    //             if (error) {
    //                 observable.error(error);
    //             } else {
    //                 observable.next(new User(userData));
    //             }
    //         });
    //     });
    // }
    // logout(): Observable<any> {
    //     return new Observable(Observable => {

    //     });
    // }
}
