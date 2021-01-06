import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuctionSort} from '../model/AuctionSort';
import {Observable, of} from 'rxjs';
import {SimpleAuction} from '../model/simpleAuction';
import {AuctionFilter} from '../model/AuctionFilter';
import {Page} from '../model/page';
import {Auction} from '../../auctions/model/Auction';
import {CreateAuction} from '../../auctions/model/CreateAuction';
import {FormGroup} from '@angular/forms';

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

  public getCreateAuctionData(): Observable<CreateAuction> {
    return this.http.get<CreateAuction>(`${this.apiUrl}auctions/create-auction-data`);
  }

  public createAuction(auctionForm: FormGroup): Observable<number> {
    const auction = {
      title: auctionForm.value.title,
      description: auctionForm.value.description,
      minPrice: auctionForm.value.minPrice,
      buyNowPrice: auctionForm.value.buyNowPrice,
      promoted: auctionForm.value.promoted,
      startDate: auctionForm.value.startDate,
      categoryId: auctionForm.value.categoryId,
    };
    return this.http.post<number>(`${this.apiUrl}auctions`, auction);
  }

  public addImagesToAuction(images: File[], auctionId: number): Observable<any> {
    for (const image of images) {
      this.addSingleImage(image, auctionId);
    }
    return of(true);
  }

  private addSingleImage(image: File, auctionId: number): void {
    const form = new FormData();
    form.append('file', image);
    this.http.post(`${this.apiUrl}auctions/${auctionId}/images`, form).subscribe();
  }
}