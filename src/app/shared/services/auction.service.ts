import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuctionSort} from '../model/AuctionSort';
import {forkJoin, from, Observable} from 'rxjs';
import {SimpleAuction} from '../model/simpleAuction';
import {AuctionFilter} from '../model/AuctionFilter';
import {Page} from '../model/page';
import {Auction} from '../../auctions/model/Auction';
import {CreateAuction} from '../../auctions/model/CreateAuction';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private router: Router) {
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
    if (images) {
      const imageSubscribers = [];
      for (const image of images) {
        imageSubscribers.push(this.addSingleImage(image, auctionId));
      }
      return forkJoin(imageSubscribers)
        .pipe(switchMap(() => from(this.router.navigateByUrl(`auctions/${auctionId}`))));
    }
    return from(this.router.navigateByUrl(`auctions/${auctionId}`));
  }

  public endUsersOwnAuction(command: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auctions/end-own-auction`, command);
  }

  private addSingleImage(image: File, auctionId: number): Observable<any> {
    const form = new FormData();
    form.append('file', image);
    return this.http.post(`${this.apiUrl}auctions/${auctionId}/images`, form);
  }

  observe(auctionId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}auctions/${auctionId}/observe`, null);
  }

  unobserve(auctionId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}auctions/${auctionId}/stop-observing`, null);
  }

  rateAsSeller(purchaseId: number, ratingForm: FormGroup): Observable<any> {
    const sellerRatePurchaseCommand = {
      purchaseId,
      sellersRating: ratingForm.value.rating,
      sellersComment: ratingForm.value.comment
    };
    return this.http.post(`${this.apiUrl}auctions/rate-seller`, sellerRatePurchaseCommand);
  }
}
