import {AuctionStatus} from '../../auctions/model/AuctionStatus';

export interface SimpleAuction {
  id: number;
  title: string;
  mainPhotoName: string;
  bidPrice: number;
  buyNowPrice: number;
  alreadyBidded: boolean;
  biddersAmount: number;
  status: AuctionStatus;
  isBought: boolean;
  alreadyRatedBySeller: boolean;
  purchaseId: number;
  startDateTime: Date;
  endDateTime: Date;
  promoted: boolean;
}
