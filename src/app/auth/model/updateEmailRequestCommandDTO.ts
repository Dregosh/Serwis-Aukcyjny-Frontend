export class UpdateEmailRequestCommandDTO {
  constructor(
    public oldEmail: string,
    public newEmail: string
  ) {}
}
