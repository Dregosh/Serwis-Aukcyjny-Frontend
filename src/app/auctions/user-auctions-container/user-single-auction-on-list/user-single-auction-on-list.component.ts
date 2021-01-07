import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {SimpleAuction} from '../../../shared/model/simpleAuction';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-single-auction-on-list',
  templateUrl: './user-single-auction-on-list.component.html',
  styleUrls: ['./user-single-auction-on-list.component.css']
})
export class UserSingleAuctionOnListComponent implements OnInit {

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
