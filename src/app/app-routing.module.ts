import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { CountriesComponent } from './countries/countries.component';
const routes: Routes = [

   { path: 'users', component: UsersComponent },
   { path: 'countries' , component: CountriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
