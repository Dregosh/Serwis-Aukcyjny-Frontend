import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuctionsRoutingModule} from './auctions-routing.module';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import { MainCompomentComponent } from './main-compoment/main-compoment.component';
import {CategoriesComponent} from './categories/categories.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {AuctionBeltComponent} from '../shared/auction-belt/auction-belt.component';
import {SingleAuctionCardComponent} from '../shared/single-auction-card/single-auction-card.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
    MainCompomentComponent,
    CategoriesComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
  ],
  imports: [
    CommonModule,
    AuctionsRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AuctionsModule { }
