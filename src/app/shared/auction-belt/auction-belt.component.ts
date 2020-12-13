import {Component, Input, OnInit} from '@angular/core';
import {SimpleAuction} from '../model/simpleAuction';

@Component({
  selector: 'app-auction-belt',
  templateUrl: './auction-belt.component.html',
  styleUrls: ['./auction-belt.component.css']
})
export class AuctionBeltComponent implements OnInit {

  @Input() auctions: SimpleAuction[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
