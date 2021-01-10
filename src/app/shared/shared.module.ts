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
import { InternalErrorComponent } from './modals/internal-error/internal-error.component';
import { ErrorCodeComponent } from './modals/error-code/error-code.component';
import { AuctionBoughtComponent } from './modals/auction-bought/auction-bought.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppButtonComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
    InternalErrorComponent,
    ErrorCodeComponent,
    AuctionBoughtComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [AuthenticatedGuard, RedirectStore],
  exports: [
    AppButtonComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
  ],
})
export class SharedModule {}
