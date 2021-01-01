import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Auction} from '../../model/Auction';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {
  @Input() auction: Auction;
  @Output() refreshEmitter = new EventEmitter<boolean>();
  description: any;
  images: any;

  constructor() {
  }

  ngOnInit(): void {
    this.description = this.auction.description;
    this.images = this.auction.photoNames;
  }
}
