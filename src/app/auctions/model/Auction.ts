import {AuctionStatus} from './AuctionStatus';

export interface Auction {
  id: number;
   title: string;
   description: string;
   sellerId: number;
   sellerDisplayName: string;
   buyNowPrice: number;
   maxBid: number;
   canBuyNow: boolean;
   canBid: boolean;
   startDateTime: string;
   endDateTime: string;
   status: AuctionStatus;
   observed: boolean;
   premium: boolean;
   userAuction: boolean;
   photoNames: Array<string>;
}
