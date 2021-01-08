import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuctionSort} from '../../../shared/model/AuctionSort';
import {SimpleAuction} from '../../../shared/model/simpleAuction';

@Component({
  selector: 'app-user-auction-list',
  templateUrl: './user-auction-list.component.html',
  styleUrls: ['./user-auction-list.component.css']
})
export class UserAuctionListComponent implements OnInit {
  sorts = [
    {
      sort: AuctionSort.END_TIME_ASC,
      name: 'Data zakończenia - od najbliższej'
    },
    {
      sort: AuctionSort.END_TIME_DESC,
      name: 'Data zakończenia - od najdalszej'
    },
    {
      sort: AuctionSort.TITLE_ASC,
      name: 'Nazwa rosnąco',
    },
    {
      sort: AuctionSort.TITLE_DESC,
      name: 'Nazwa malejąco'
    },
    {
      sort: AuctionSort.ID_DESC,
      name: 'Numer aukcji malejąco',
    },
    {
      sort: AuctionSort.ID_ASC,
      name: 'Numer aukcji rosnąco',
    },
    {
      sort: AuctionSort.BID_PRICE_ASC,
      name: 'Cena licytacji rosnąco',
    },
    {
      sort: AuctionSort.BID_PRICE_DESC,
      name: 'Cena licytacji malejąco',
    },
    {
      sort: AuctionSort.BUY_NOW_PRICE_ASC,
      name: 'Cena kup teraz rosnąco',
    },
    {
      sort: AuctionSort.BUY_NOW_PRICE_DESC,
      name: 'Cena kup teraz malejąco',
    }
  ];
  @Input() currentSort: AuctionSort;
  @Input() auctions: SimpleAuction[];
  @Output() sortChange = new EventEmitter<AuctionSort>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public emitSortChange(sort: AuctionSort): void {
    this.sortChange.emit(sort);
  }

  public findByCurrentSort(): string {
    return this.sorts.filter(sort => sort.sort === this.currentSort)[0].name;
  }
}
