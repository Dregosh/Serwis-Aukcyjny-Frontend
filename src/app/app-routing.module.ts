import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionsRoutingModule} from './auctions/auctions-routing.module';
import {AuthRoutingModule} from './auth/auth-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuctionsRoutingModule,
  },
  {
    path: 'auth',
    loadChildren: () => AuthRoutingModule,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
