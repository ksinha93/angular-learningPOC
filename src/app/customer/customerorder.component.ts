import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { SharedData } from '../shareddata.service';

@Component({
  selector: 'cust-ord',
  templateUrl: './customerorder.component.html',
})
export class CustomerOrderComponent {
  IsUserValid: string = 'false';
  constructor(private svcCust: CustomerService, private svcData: SharedData) {
    this.svcData.getMessage().subscribe((s) => {
      this.IsUserValid = s;
      console.log(s);
    });
    this.OrderForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      ordDate: new FormControl(''),
      ordItems: new FormControl(''),
    });
    this.getAllOrders();
  }
  AllOrders: any[] = [];
  OrderForm: FormGroup;

  getAllOrders() {
    this.svcCust.getAllOrders().subscribe((l) => {
      this.AllOrders = l;
    });
  }

  submitForm() {
    const ord = {
      firstname: this.OrderForm.controls['firstname'].value,
      lastname: this.OrderForm.controls['lastname'].value,
      ordDate: this.OrderForm.controls['ordDate'].value,
      ordItems: this.OrderForm.controls['ordItems'].value,
    };

    this.svcCust.saveOrder(ord);

    this.getAllOrders();
  }
}
