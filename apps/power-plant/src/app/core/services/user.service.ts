import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser$: BehaviorSubject<Partial<User>> = new BehaviorSubject<
    Partial<User>
  >({});
  constructor() {}

  public set isLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  public get isLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public setCurrentUser(user: User) {
    this.isLoggedIn = true;
    localStorage.setItem('Token', user.token);
    localStorage.setItem('User', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  public get User(): Partial<User> {
    return this.currentUser$.value;
  }
}
