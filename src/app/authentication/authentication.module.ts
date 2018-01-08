import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignupComponent],
  exports:[LoginComponent, SignupComponent]
})
export class AuthenticationModule { }
