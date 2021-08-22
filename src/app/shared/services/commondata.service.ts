import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  public data = new BehaviorSubject<any>("");
  searchdata = this.data.asObservable();

  constructor() { }
  search(data) {
    this.data.next(data);
  }
}
