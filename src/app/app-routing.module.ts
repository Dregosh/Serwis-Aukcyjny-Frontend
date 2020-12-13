import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
  {
    path: 'dashboard',
    component: MainDashboardComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
