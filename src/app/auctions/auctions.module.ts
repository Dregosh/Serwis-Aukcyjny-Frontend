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
import {FlexModule} from '@angular/flex-layout';
import {AuctionListContainerComponent} from './auction-list-container/auction-list-container.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionFilterComponent } from './auction-filter/auction-filter.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SingleAuctionOnListComponent } from './single-auction-on-list/single-auction-on-list.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    MainDashboardComponent,
    MainCompomentComponent,
    CategoriesComponent,
    AuctionBeltComponent,
    SingleAuctionCardComponent,
    AuctionListContainerComponent,
    AuctionListComponent,
    AuctionFilterComponent,
    SingleAuctionOnListComponent,
  ],
    imports: [
        CommonModule,
        AuctionsRoutingModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        FlexModule,
        MatPaginatorModule,
        MatSelectModule,
        FormsModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ]
})
export class AuctionsModule { }
