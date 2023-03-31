import { Component, Input, OnInit } from '@angular/core';
import { SharedData } from './shareddata.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  LoginMessage: any;
  changeMenu: boolean = false;
  elementColor: string = 'blue';
  constructor(private svcData: SharedData) {}

  ngOnInit() {
    this.elementColor = 'blue';
  }

  getDataMessage(): void {
    try {
      this.svcData.getMessage().subscribe((l) => {
        this.LoginMessage = l;
      });
    } catch (err) {
      console.log(err);
    }
  }

  onCheckBoxSelect(selected: boolean) {
    this.changeMenu = selected;
    if (selected == true) {
      this.elementColor = 'blue';
      console.log('checked');
    } else {
      this.elementColor = 'white';
      console.log('unchecked');
    }
  }
}
