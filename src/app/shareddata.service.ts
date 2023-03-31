import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  constructor() {}
  private loginMessage = new BehaviorSubject<any>('failure');

  sendMessage(mesg) {
    this.loginMessage.next(mesg);
  }

  getMessage(): Observable<any> {
    console.log('in service');
    console.log(
      this.loginMessage.asObservable().subscribe((k) => {
        console.log(k);
      })
    );
    return this.loginMessage;
  }

  clearData() {
    this.loginMessage.next('');
  }
}
