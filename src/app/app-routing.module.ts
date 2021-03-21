import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'home'},
  {path: 'signup', pathMatch : 'full', component: SignupComponent},
  {path: 'login', pathMatch : 'full', component: LoginComponent},
  {path: 'home', pathMatch : 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
