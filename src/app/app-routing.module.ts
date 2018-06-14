import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [  { path: '', component: RegistrationComponent },
  {
    path: 'products',
    component: ProductsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
