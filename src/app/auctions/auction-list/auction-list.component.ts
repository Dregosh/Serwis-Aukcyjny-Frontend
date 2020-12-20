import {Component, Input, OnInit} from '@angular/core';
import {SimpleAuction} from '../../shared/model/simpleAuction';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {

  @Input() auctions: SimpleAuction[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
