import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  signupForm: FormGroup; // Declare the signupForm 
 
    constructor(private fb:FormBuilder) {}
  onFormSubmit() {
  console.log('onFormSubmit');
  }
  ngOnInit() {

   this.signupForm  = this.fb.group({
            email: ['',[Validators.required,
                        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
        })
  }
}
