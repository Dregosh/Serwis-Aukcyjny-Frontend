export interface EditUserDTO {
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
    state: string;
    street: string;
    number: string;
    postal: string;
  };
}
