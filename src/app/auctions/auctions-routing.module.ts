import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {NgModule} from '@angular/core';
import {MainCompomentComponent} from './main-compoment/main-compoment.component';
import {AuctionListContainerComponent} from './auction-list-container/auction-list-container.component';
import {AuctionContainerComponent} from './auction-container/auction-container.component';

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
      {
        path: 'categories/:categoryId',
        component: AuctionListContainerComponent
      },
      {
        path: 'auctions/:auctionId',
        component: AuctionContainerComponent
      }
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuctionsRoutingModule {
}
