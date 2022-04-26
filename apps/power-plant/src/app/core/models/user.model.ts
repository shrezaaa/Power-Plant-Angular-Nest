export class User {
  id;
  username;
  firstName;
  lastName;
  email;
  accessToken;
  iat;
  exp;

  constructor(el) {
    this.id = el?.id;
    this.username = el?.username;
    this.firstName = el?.firstName;
    this.lastName = el?.lastName;
    this.email = el?.email;
    this.accessToken = el?.token;
    this.iat = el?.iat;
    this.exp = el?.exp;
  }

  public get userFullName(): string {
    return `${this.firstName ?? ''} ${this.lastName}`;
  }
}
