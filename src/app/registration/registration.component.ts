import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core'
import { UserService } from '../user-service';
import { User } from '../domain/user';
import { Profile } from '../domain/profile';
import { DialogComponent } from '../dialog/dialog.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {
	allProfiles: Profile[];
  dialogResult : '';
  isValidFormSubmitted: boolean = false;
	user = new User();
  	constructor(private userService: UserService, public dialog: MatDialog) {
    }
    ngOnInit() {
        this.allProfiles = this.userService.getPofiles();
    }


    openDialog() {
       let dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: 'This text is passed into the dialog!'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
      });
    }
    onFormSubmit(form: NgForm) {
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

  reset(form: NgForm) {
   form.resetForm();
  }
}
