import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FilterForm} from '../model/FilterForm';
import {AuctionFilter} from '../../shared/model/AuctionFilter';

@Component({
  selector: 'app-auction-filter',
  templateUrl: './auction-filter.component.html',
  styleUrls: ['./auction-filter.component.css']
})
export class AuctionFilterComponent implements OnInit {
  filterForm = new FilterForm();

  @Output() filterFormChangeEmitter = new EventEmitter<Map<AuctionFilter, any>>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onFilter(): void {
    this.filterFormChangeEmitter.emit(this.filterForm.toAuctionFilterMap());
  }
}
