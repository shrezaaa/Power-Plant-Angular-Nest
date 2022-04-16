import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser$: BehaviorSubject<Partial<User>> = new BehaviorSubject<
    Partial<User>
  >({});
  constructor() {}

  public setCurrentUser(user: User) {
    console.log(user);
    localStorage.setItem('User', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  public get User(): Partial<User> {
    return this.currentUser$.value;
  }

  setUserByToken(encodedToken: string): any {
    let decodedToken = jwt_decode(encodedToken, { header: false });
    let user = new User(decodedToken);
    localStorage.setItem('Token', encodedToken);
    this.setCurrentUser(user);
    return user;
  }

  onLogout(){
    localStorage.clear();
    this.currentUser$.next({})
  }
}
