import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {NgModule} from '@angular/core';
import {AuctionListContainerComponent} from './auction-list-container/auction-list-container.component';
import {AuctionContainerComponent} from './auction-container/auction-container.component';
import {CreateAuctionComponent} from './create-auction/create-auction.component';
import {AuctionComponentComponent} from './auction-component/auction-component.component';
import {MainCompomentComponent} from './main-compoment/main-compoment.component';
import {UserAuctionsContainerComponent} from './user-auctions-container/user-auctions-container.component';
import {AuthenticatedGuard} from '../shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AuctionComponentComponent,
    children: [
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
          },
        ]
      },
      {
        path: 'create-auction',
        component: CreateAuctionComponent,
        canActivate: [AuthenticatedGuard],
      }
    ]
  },
  {
    path: 'user-auctions',
    component: UserAuctionsContainerComponent,
    canActivate: [AuthenticatedGuard],
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuctionsRoutingModule {
}
