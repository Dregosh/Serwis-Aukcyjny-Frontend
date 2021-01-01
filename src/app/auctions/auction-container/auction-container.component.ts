import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../../shared/services/auction.service';
import {Observable} from 'rxjs';
import {Auction} from '../model/Auction';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auction-container',
  templateUrl: './auction-container.component.html',
  styleUrls: ['./auction-container.component.css']
})
export class AuctionContainerComponent implements OnInit {
  auction$: Observable<Auction>;
  auctionId: number;

  constructor(private auctionService: AuctionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.auctionId = Number(this.route.snapshot.paramMap.get('auctionId'));
    this.auction$ = this.auctionService.getAuction(this.auctionId);
  }

  refreshAuction(): void {
    this.auction$ = this.auctionService.getAuction(this.auctionId);
  }

}
