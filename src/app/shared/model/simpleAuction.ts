export interface SimpleAuction {
  id: number;
  title: string;
  mainPhotoName: string;
  bidPrice: number;
  buyNowPrice: number;
  alreadyBidded: boolean;
  biddersAmount: number;
  startDateTime: Date;
  endDateTime: Date;
}
