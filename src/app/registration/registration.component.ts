import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core'
import { UserService } from '../user-service';
import { User } from '../domain/user';
import { Profile } from '../domain/profile';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {
	allProfiles: Profile[];
	user = new User();
  	constructor(private userService: UserService) {
    }
    ngOnInit() {
        this.allProfiles = this.userService.getPofiles();
    }
    onFormSubmit(form: ngForm) {
     this.isValidFormSubmitted = false;
     if (form.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = form.value;
     this.userService.createUser(this.user);
     this.user = new User();
     form.resetForm();
  }
}
