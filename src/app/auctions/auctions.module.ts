import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuctionsRoutingModule} from './auctions-routing.module';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {MainCompomentComponent} from './main-compoment/main-compoment.component';
import {CategoriesComponent} from './categories/categories.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {AuctionListContainerComponent} from './auction-list-container/auction-list-container.component';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionFilterComponent} from './auction-filter/auction-filter.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SingleAuctionOnListComponent} from './single-auction-on-list/single-auction-on-list.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuctionContainerComponent} from './auction-container/auction-container.component';
import {AuctionDetailsComponent} from './auction-container/auction-details/product-details.component';
import {AuctionDescriptionComponent} from './auction-container/auction-description/auction-description.component';
import {AuctionImagesComponent} from './auction-container/auction-images/auction-images.component';
import {AuctionActionsComponent} from './auction-container/auction-actions/auction-actions.component';
import {AuctionEndedComponent} from './auction-container/auction-ended/auction-ended.component';
import {CreateAuctionComponent} from './create-auction/create-auction.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {SharedModule} from '../shared/shared.module';
import { AuctionComponentComponent } from './auction-component/auction-component.component';
import {UserAuctionsContainerComponent} from './user-auctions-container/user-auctions-container.component';
import { UserSingleAuctionOnListComponent } from './user-auctions-container/user-single-auction-on-list/user-single-auction-on-list.component';
import { UserAuctionListComponent } from './user-auctions-container/user-auction-list/user-auction-list.component';
import {MatRadioModule} from '@angular/material/radio';
import { TransactionRateFormComponent } from '../shared/transaction-rate-form/transaction-rate-form.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    MainCompomentComponent,
    CategoriesComponent,
    AuctionListContainerComponent,
    AuctionListComponent,
    AuctionFilterComponent,
    SingleAuctionOnListComponent,
    AuctionContainerComponent,
    AuctionDetailsComponent,
    AuctionDescriptionComponent,
    AuctionImagesComponent,
    AuctionActionsComponent,
    AuctionEndedComponent,
    CreateAuctionComponent,
    AuctionComponentComponent,
    UserAuctionsContainerComponent,
    UserSingleAuctionOnListComponent,
    UserAuctionListComponent,
    TransactionRateFormComponent
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
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MaterialFileInputModule,
        SharedModule,
        MatRadioModule
    ]
})
export class AuctionsModule { }
