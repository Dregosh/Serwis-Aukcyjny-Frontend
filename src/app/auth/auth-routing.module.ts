import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from './edit-user/edit-user.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';

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
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {
}
