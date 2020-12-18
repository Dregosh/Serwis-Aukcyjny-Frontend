import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from './edit-user/edit-user.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EditUserComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {
}
