import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../domain/userResponse';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(private http: HttpClient){
  }
  deleteUser(u) {
console.log('delete: ', u);
  }
  editUser(u) {
console.log('edit: ', u);

  }
  ngOnInit(): void {
    this.http.get('https://api.github.com/users').subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
