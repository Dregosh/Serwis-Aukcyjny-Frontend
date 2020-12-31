import {Component, Input, OnInit} from '@angular/core';
import {SimpleAuction} from '../../shared/model/simpleAuction';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-auction-on-list',
  templateUrl: './single-auction-on-list.component.html',
  styleUrls: ['./single-auction-on-list.component.css']
})
export class SingleAuctionOnListComponent implements OnInit {
  photoUrl = environment.photoUrl;

  @Input() auction: SimpleAuction;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public goToAuction(): void {
    this.router.navigateByUrl(`/auctions/${this.auction.id}`);
  }

}
