import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Auction} from '../../model/Auction';
import {AuctionStatus} from '../../model/AuctionStatus';

@Component({
  selector: 'app-auction-description',
  templateUrl: './auction-description.component.html',
  styleUrls: ['./auction-description.css']
})
export class AuctionDescriptionComponent implements OnInit {
  @Input() auction: Auction;
  @Output() refreshEmitter = new EventEmitter<boolean>();
  canDoAnyAction = false;
  isEnded: any;

  constructor() { }

  ngOnInit(): void {
    this.canDoAnyAction = this.auction.status !== AuctionStatus.ENDED && !this.auction.userAuction;
    this.isEnded = this.auction.status === AuctionStatus.ENDED;
  }

}
