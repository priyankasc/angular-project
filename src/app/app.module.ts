import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatButtonModule, MatTooltipModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';


// for CRUD
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProductsComponent,
    DialogComponent,
    TooltipComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    AppRoutingModule, FormsModule, MatTooltipModule,
    MatCardModule, MatButtonModule, MatDialogModule, ReactiveFormsModule , HttpClientModule
  ],
  providers: [UsersService],
   entryComponents: [DialogComponent, TooltipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
