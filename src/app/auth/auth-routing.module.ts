import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from './edit-user/edit-user.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationConfirmationComponent} from './registration-confirmation/registration-confirmation.component';
import {EmailConfirmationComponent} from './email-confirmation/email-confirmation.component';
import {EmailNotVerifiedComponent} from './email-not-verified/email-not-verified.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';

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
    component: EditUserComponent
  }, {
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
    path: 'registration',
    component: RegistrationPageComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {
}
