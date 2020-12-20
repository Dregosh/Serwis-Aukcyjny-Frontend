import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionsRoutingModule} from './auctions/auctions-routing.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {TokenGuard} from './shared/guards/token.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuctionsRoutingModule,
    canActivate: [TokenGuard],
  },
  {
    path: 'auth',
    loadChildren: () => AuthRoutingModule,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
