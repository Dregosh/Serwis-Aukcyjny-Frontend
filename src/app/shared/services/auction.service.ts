import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuctionSort} from '../model/AuctionSort';
import {Observable} from 'rxjs';
import {SimpleAuction} from '../model/simpleAuction';
import {AuctionFilter} from '../model/AuctionFilter';
import {Page} from '../model/page';

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
}
