import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../domain/userResponse';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
 
})
export class UsersComponent implements OnInit {

  users: any;
  constructor( private UsersService: UsersService, private http: HttpClient){
  }
  deleteUser(u) {
    console.log('delete: ', u);
  }
  editUser(u) {
      console.log('edit: ', u);
  }

  ngOnInit(): void {
   this.http.get('http://localhost:3000/users').subscribe(data => { 
    console.log(data);
    this.users = data;  })
  }

  createUser() {
    this.http.post('http://localhost:3000/users', {
      name: 'PRIYANKA',
      age: 28,
      location: 'Mumbai',
      id: 55
    })
      .subscribe(
        res => {
          console.log(res);
          this.users.push(res);
        },
        err => {
          console.log('Error occured',  err);
        }
      );
  }
}
