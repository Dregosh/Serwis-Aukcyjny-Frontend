import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Auction} from '../../model/Auction';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuctionService} from '../../../shared/services/auction.service';
import {switchMap, tap} from 'rxjs/operators';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {AuctionBoughtComponent} from '../../../shared/modals/auction-bought/auction-bought.component';

@Component({
  selector: 'app-auction-actions',
  templateUrl: './auction-actions.component.html',
  styleUrls: ['./auction-actions.component.css']
})
export class AuctionActionsComponent implements OnInit {
  @Input() auction: Auction;
  @Output() refreshEmitter = new EventEmitter<boolean>();
  bidForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auctionService: AuctionService,
              public authenticationService: AuthenticationService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.bidForm = this.formBuilder.group({
      bidPrice: new FormControl(this.auction.maxBid + 1, [Validators.required, Validators.min(this.auction.maxBid + 1)])
    });
  }

  bid = () => this.auctionService.bidAuction(this.auction.id, this.bidForm.value.bidPrice)
    .pipe(tap(() => this.refreshEmitter.emit(true)));


  buyNow = () => this.auctionService.buyNow(this.auction.id)
    .pipe(switchMap(() => this.dialog.open(AuctionBoughtComponent).afterClosed()
        .pipe(tap(() => this.refreshEmitter.emit(true)))));

  observe = () => this.auctionService.observe(this.auction.id)
    .pipe(tap(() => this.refreshEmitter.emit(true)));

  unObserve = () => this.auctionService.unobserve(this.auction.id)
    .pipe(tap(() => this.refreshEmitter.emit(true)));

}
