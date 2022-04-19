import { BehaviorSubject } from "rxjs";

export class BehaviorMap<V> {
  value: Map<number, BehaviorSubject<V[]>>;
  constructor(value?) {
    this.value = new Map<number, BehaviorSubject<V[]>>(value);
  }

  addToMap(ID: number, value: V[]) {
    if (ID != undefined)
      if (this.value.has(ID)) {
        this.value.get(ID).next(value);
      } else {
        this.value.set(ID, new BehaviorSubject<V[]>(value));
      }
  }

  getFromMap(ID: number): BehaviorSubject<V[]> {
    if (!this.value.has(ID)) {
      this.value.set(ID, new BehaviorSubject<V[]>([]));
    }
    return this.value.get(ID);
  }
}
