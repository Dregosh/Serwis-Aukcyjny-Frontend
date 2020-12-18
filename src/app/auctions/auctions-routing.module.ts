import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {EditUserComponent} from '../auth/edit-user/edit-user.component';
import {NgModule} from '@angular/core';
import {MainCompomentComponent} from './main-compoment/main-compoment.component';

const routes: Routes = [
  {
    path: '',
    component: MainCompomentComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: MainDashboardComponent
      },
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuctionsRoutingModule {
}
