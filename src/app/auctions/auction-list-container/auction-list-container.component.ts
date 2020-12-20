import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SimpleAuction} from '../../shared/model/simpleAuction';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {AuctionService} from '../../shared/services/auction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuctionFilter} from '../../shared/model/AuctionFilter';
import {AuctionSort} from '../../shared/model/AuctionSort';
import {switchMap, tap} from 'rxjs/operators';
import {Page} from '../../shared/model/page';

@Component({
  selector: 'app-auction-list-container',
  templateUrl: './auction-list-container.component.html',
  styleUrls: ['./auction-list-container.component.css']
})
export class AuctionListContainerComponent implements OnInit, AfterViewInit {
  auctions$: Observable<Page<SimpleAuction>>;
  categoryId: number;
  filterMap = new Map<AuctionFilter, any>();
  sortType = AuctionSort.ID_DESC;
  hasNext = false;
  hasPrevious = false;
  total = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private auctionService: AuctionService, private route: ActivatedRoute, private router: Router) {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.getAuctions(0, 10);
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
  }

  public getAuctions(page: number, size: number): void {
    this.auctions$ = this.auctionService.getAuctions(this.categoryId, page, size, this.filterMap, this.sortType)
      .pipe(tap((pageResponse) => {
        this.hasNext = !pageResponse.last;
        this.hasPrevious = !pageResponse.first;
        this.total = pageResponse.totalElements;
      }));
  }

}
