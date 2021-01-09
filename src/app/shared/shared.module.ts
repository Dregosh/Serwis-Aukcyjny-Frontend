import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AppButtonComponent} from './app-button/app-button.component';
import {AuctionBeltComponent} from './auction-belt/auction-belt.component';
import {SingleAuctionCardComponent} from './single-auction-card/single-auction-card.component';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {RedirectStore} from './services/redirect.store';

@NgModule({
  declarations: [
    AppButtonComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [AuthenticatedGuard, RedirectStore],
  exports: [
    AppButtonComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
  ],
})
export class SharedModule {}
