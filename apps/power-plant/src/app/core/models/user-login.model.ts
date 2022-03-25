export class UserLogin {
  jwt: string;
  user?: User;
  userName?: string;
}

export interface User {
  id;
  username;
  firstName;
  lastName;
  email;
}
