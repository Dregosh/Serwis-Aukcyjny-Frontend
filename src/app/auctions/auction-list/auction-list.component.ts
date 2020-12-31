import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SimpleAuction} from '../../shared/model/simpleAuction';
import {AuctionSort} from '../../shared/model/AuctionSort';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
  sorts = [
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
    },
    {
      sort: AuctionSort.TITLE_ASC,
      name: 'Numer po nazwie rosnąco',
    },
    {
      sort: AuctionSort.TITLE_DESC,
      name: 'Po nazwie malejąco'
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

class Sort {
  sort: AuctionSort;
  name: string;
}
