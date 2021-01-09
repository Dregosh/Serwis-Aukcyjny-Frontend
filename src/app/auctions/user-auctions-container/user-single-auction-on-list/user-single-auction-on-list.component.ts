import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {SimpleAuction} from '../../../shared/model/simpleAuction';
import {Router} from '@angular/router';
import {AuctionService} from '../../../shared/services/auction.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-user-single-auction-on-list',
  templateUrl: './user-single-auction-on-list.component.html',
  styleUrls: ['./user-single-auction-on-list.component.css']
})
export class UserSingleAuctionOnListComponent implements OnInit {

  photoUrl = environment.photoUrl;

  @Input() auction: SimpleAuction;

  constructor(private router: Router,
              private auctionService: AuctionService) {
  }

  ngOnInit(): void {
  }

  public endAuction(): void {
    this.auctionService.endUsersOwnAuction({auctionId: this.auction.id})
      .pipe(finalize(() => this.reloadCurrentRoute()))
      .subscribe();
  }

  private reloadCurrentRoute(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['user-auctions']);
    });
  }
}
