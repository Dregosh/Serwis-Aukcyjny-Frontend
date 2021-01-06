import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MatCardModule} from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationConfirmationComponent} from './registration-confirmation/registration-confirmation.component';
import {EmailConfirmationComponent} from './email-confirmation/email-confirmation.component';
import {EmailNotVerifiedComponent} from './email-not-verified/email-not-verified.component';
import {EmailChangeConfirmationComponent} from './edit-user/email-change-confirmation/email-change-confirmation.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {EmailChangeRequestConfirmationComponent} from './edit-user/email-change-request-confirmation/email-change-request-confirmation.component';
import {PasswordChangeFormComponent} from './edit-user/password-change-form/password-change-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    EditUserComponent,
    LoginComponent,
    RegistrationConfirmationComponent,
    EmailConfirmationComponent,
    EmailNotVerifiedComponent,
    EmailChangeConfirmationComponent,
    RegistrationPageComponent,
    EmailChangeRequestConfirmationComponent,
    PasswordChangeFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
