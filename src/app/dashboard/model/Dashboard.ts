import {SimpleAuction} from '../../shared/model/simpleAuction';

export interface Dashboard {
  lastAdded: SimpleAuction[];
  nearlyEnd: SimpleAuction[];
  loggedUserAuctions: SimpleAuction[];
  biddedAuctions: SimpleAuction[];
  observedAuctions: SimpleAuction[];
  justFinished: SimpleAuction[];
}
