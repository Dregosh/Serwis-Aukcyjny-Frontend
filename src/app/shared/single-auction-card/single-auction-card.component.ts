import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {SimpleAuction} from '../model/simpleAuction';

@Component({
  selector: 'app-single-auction-card',
  templateUrl: './single-auction-card.component.html',
  styleUrls: ['./single-auction-card.component.css']
})
export class SingleAuctionCardComponent implements OnInit {
  @Input() auction: SimpleAuction;

  photoUrl = environment.photoUrl;


  constructor() { }

  ngOnInit(): void {
  }

}
