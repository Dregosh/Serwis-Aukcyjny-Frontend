export class UpdateUserCommandDTO {
  constructor(
    public email: string,
    public displayName: string,
    public firstName: string,
    public lastName: string,
    public address: {
      city: string,
      street: string,
      number: string,
      postal: string
    }
  ) {}
}
