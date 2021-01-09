import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from './edit-user/edit-user.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationConfirmationComponent} from './registration-confirmation/registration-confirmation.component';
import {EmailConfirmationComponent} from './email-confirmation/email-confirmation.component';
import {EmailNotVerifiedComponent} from './email-not-verified/email-not-verified.component';
import {EmailChangeConfirmationComponent} from './edit-user/email-change-confirmation/email-change-confirmation.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {EmailChangeRequestConfirmationComponent} from './edit-user/email-change-request-confirmation/email-change-request-confirmation.component';
import {PasswordChangeFormComponent} from './edit-user/password-change-form/password-change-form.component';
import {AuthenticatedGuard} from '../shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-account',
    component: EditUserComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'registration-completed',
    component: RegistrationConfirmationComponent
  },
  {
    path: 'verification/:token',
    component: EmailConfirmationComponent
  },
  {
    path: 'not-verified',
    component: EmailNotVerifiedComponent
  },
  {
    path: 'email-change-request-confirm',
    component: EmailChangeRequestConfirmationComponent
  },
  {
    path: 'email-change-confirm/:token',
    component: EmailChangeConfirmationComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'password-change/:token',
    component: PasswordChangeFormComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {
}
