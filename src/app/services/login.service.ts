import { Injectable } from '@angular/core';
import { SharedData } from '../shareddata.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData: any[] = [];

  constructor(private svcData: SharedData) {
    this.userData.push({
      userid: '1',
      username: 'us0001',
      password: 'us0001',
      role: 'user',
      custid: '1',
    });

    this.userData.push({
      userid: '2',
      username: 'us0002',
      password: 'us0002',
      role: 'user',
      custid: '2',
    });

    this.userData.push({
      userid: '2',
      username: 'us0002',
      password: 'us0002',
      role: 'admin',
    });
  }

  isUserValid(user, pass): boolean {
    if (
      this.userData.findIndex((u) => u.username == user && u.password == pass) >
      -1
    ) {
      this.svcData.sendMessage('success');
      return true;
    } else {
      this.svcData.sendMessage('failure');
      return false;
    }
  }
}
