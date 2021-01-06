import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuctionSort} from '../model/AuctionSort';
import {Observable} from 'rxjs';
import {SimpleAuction} from '../model/simpleAuction';
import {AuctionFilter} from '../model/AuctionFilter';
import {Page} from '../model/page';
import {Auction} from '../../auctions/model/Auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getAuctions(categoryId: number, page: number, size: number,
                     filterMap: Map<AuctionFilter, any>, sort: AuctionSort = AuctionSort.ID_DESC): Observable<Page<SimpleAuction>> {
    let param = new HttpParams().append('page', String(page)).append('size', String(size)).append('sort', sort);
    filterMap.forEach((value, key) => param = param.append(key, String(value)));
    return this.http.get<Page<SimpleAuction>>(`${this.apiUrl}auctions/byCategory/${categoryId}`, {params: param});
  }

  public getAuction(id: number): Observable<Auction> {
    return this.http.get<Auction>(`${this.apiUrl}auctions/${id}`);
  }

  public getLoggedUserAuctions(page: number, size: number,
                               filterMap: Map<AuctionFilter, any>,
                               sort: AuctionSort = AuctionSort.ID_DESC)
    : Observable<Page<SimpleAuction>> {
    let param =
      new HttpParams().append('page', String(page)).append('size', String(size)).append('sort', sort);
    filterMap.forEach((value, key: AuctionFilter) => param = param.append(key, String(value)));
    return this.http.get<Page<SimpleAuction>>(`${this.apiUrl}auctions/own-sorted`, {params: param});
  }

  public bidAuction(id: number, bidPrice: number): Observable<any> {
    const body = {
      auctionId: id,
      bidPrice,
    };
    return this.http.post(`${this.apiUrl}auctions/bid`, body);
  }

  public buyNow(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}auctions/${id}/buy-now`, null);
  }
}
