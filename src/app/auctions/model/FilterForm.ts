import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuctionFilter} from '../../shared/model/AuctionFilter';
import {tap} from 'rxjs/operators';

export class FilterForm extends FormGroup {
  constructor() {
    super({
      onlyCanBid: new FormControl('', []),
      onlyBuyNow: new FormControl('', []),
      onlyPromoted: new FormControl('', []),
      bidPriceFrom: new FormControl('', [Validators.min(0)]),
      bidPriceTo: new FormControl('', [Validators.min(0)]),
      buyNowPriceFrom: new FormControl(false, [Validators.min(0)]),
      buyNowPriceTo: new FormControl(false, [Validators.min(0)])
    });
  }

  public toAuctionFilterMap(): Map<AuctionFilter, any> {
    let map = new Map<AuctionFilter, any>();
    if (this.value.onlyCanBid) {
      map = map.set(AuctionFilter.ONLY_CAN_BID, this.value.onlyCanBid);
    }
    if (this.value.onlyBuyNow) {
      map = map.set(AuctionFilter.ONLY_BUY_NOW, this.value.onlyBuyNow);
    }
    if (this.value.onlyPromoted) {
      map = map.set(AuctionFilter.ONLY_PROMOTED, this.value.onlyPromoted);
    }
    if (this.value.bidPriceFrom && this.controls.bidPriceFrom.valid) {
      map = map.set(AuctionFilter.BID_PRICE_FROM, this.value.bidPriceFrom);
    }
    if (this.value.bidPriceTo && this.controls.bidPriceTo.valid) {
      map = map.set(AuctionFilter.BID_PRICE_TO, this.value.bidPriceTo);
    }
    if (this.value.buyNowPriceFrom && this.controls.buyNowPriceFrom.valid) {
      map = map.set(AuctionFilter.BUY_NOW_PRICE_FROM, this.value.buyNowPriceFrom);
    }
    if (this.value.buyNowPriceTo && this.controls.buyNowPriceTo.valid) {
      map = map.set(AuctionFilter.BUY_NOW_PRICE_TO, this.value.buyNowPriceTo);
    }
    return map;
  }

  public setOnlyBuyNow(value: boolean): void {
    this.controls.onlyBuyNow.setValue(value);
  }

  public setOnlyCanBid(value: boolean): void {
    this.controls.onlyCanBid.setValue(value);
  }

  public get onlyBuyNow(): boolean {
    return this.value.onlyBuyNow.value;
  }

  public get onlyCanBid(): boolean {
    return this.value.onlyCanBid.value;
  }
}
