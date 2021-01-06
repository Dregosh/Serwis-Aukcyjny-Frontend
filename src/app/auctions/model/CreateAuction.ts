import {Category} from '../../shared/model/category';

export interface CreateAuction {
  canCreatePromotedAuction: boolean;
  categories: Array<Category>;
}
