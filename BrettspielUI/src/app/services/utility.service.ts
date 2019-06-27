import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  show= new BehaviorSubject(new Boolean(false));
  currentShow = this.show.asObservable();
  message= new BehaviorSubject(new String(""));
  currentMessage = this.message.asObservable();
  constructor() { }
}
