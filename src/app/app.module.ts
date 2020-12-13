import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ContentPageComponent } from './content-page/content-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriesComponent } from './shared/categories/categories.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SingleAuctionCardComponent } from './shared/single-auction-card/single-auction-card.component';
import { AuctionBeltComponent } from './shared/auction-belt/auction-belt.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    NavbarComponent,
    MainDashboardComponent,
    CategoriesComponent,
    SingleAuctionCardComponent,
    AuctionBeltComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
