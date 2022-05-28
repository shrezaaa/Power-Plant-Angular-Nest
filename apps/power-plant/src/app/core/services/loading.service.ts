import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  loading_counter = 0;
  constructor() {
    this._isLoading.next(false);
  }

  public get isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  public show() {
    if (this.loading_counter > 0) {
      this.loading_counter++;
      return;
    }
    this.loading_counter++;
    this._isLoading.next(true);
  }

  public hide() {
    if (this.loading_counter > 1) {
      this.loading_counter--;
      return;
    }
    this.loading_counter--;
    this._isLoading.next(false);
  }
}
