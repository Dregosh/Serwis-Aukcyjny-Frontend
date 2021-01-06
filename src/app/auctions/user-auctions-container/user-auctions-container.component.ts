import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../../shared/model/page';
import {SimpleAuction} from '../../shared/model/simpleAuction';
import {AuctionFilter} from '../../shared/model/AuctionFilter';
import {AuctionSort} from '../../shared/model/AuctionSort';
import {MatPaginator} from '@angular/material/paginator';
import {AuctionService} from '../../shared/services/auction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-user-auctions-container',
  templateUrl: './user-auctions-container.component.html',
  styleUrls: ['./user-auctions-container.component.css']
})
export class UserAuctionsContainerComponent implements OnInit, AfterViewInit {
  auctions$: Observable<Page<SimpleAuction>>;
  filterMap = new Map<AuctionFilter, any>();
  sortType = AuctionSort.ID_DESC;
  hasNext = false;
  hasPrevious = false;
  total = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private auctionService: AuctionService,
              private route: ActivatedRoute,
              private router: Router) {
    // this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.getAuctions(0, 5);
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
  }

  public getAuctions(page: number, size: number): void {
    this.auctions$ =
      this.auctionService.getLoggedUserAuctions(page, size, this.filterMap, this.sortType)
        .pipe(tap((pageResponse: Page<SimpleAuction>) => {
          this.hasNext = !pageResponse.last;
          this.hasPrevious = !pageResponse.first;
          this.total = pageResponse.totalElements;
        }));
  }

  public changeSortType(sortType: AuctionSort): void {
    this.sortType = sortType;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
    this.getAuctions(0, 5);
  }

  public filterAuctions(filterMap: Map<AuctionFilter, any>): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.filterMap = filterMap;
    this.getAuctions(0, 5);
  }
}
