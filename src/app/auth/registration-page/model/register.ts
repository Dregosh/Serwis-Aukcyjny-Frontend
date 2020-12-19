import {Address} from '../../../shared/model/address';

export interface Register {
  address: Address;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  password: string;
}
