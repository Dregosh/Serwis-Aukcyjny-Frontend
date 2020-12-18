import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  declarations: [
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
