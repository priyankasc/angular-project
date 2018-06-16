import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './domain/userResponse';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  	constructor( private http: HttpClient) {}
  	private headers = new Headers({ 'Content-Type': 'application/json' });
	  private bikesUrl : string = 'http://localhost:3000/users';
    getUsers() : any{
    debugger;
          this.http.get(this.bikesUrl);
  	}
}
