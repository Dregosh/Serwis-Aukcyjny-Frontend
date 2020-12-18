import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AuthModule { }
