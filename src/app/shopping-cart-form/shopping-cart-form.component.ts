import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { MatSnackBar } from '@angular/material';
import { Product } from '../product';
import { Location } from '@angular/common'
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('2s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0s', style({ opacity: 0 }))
    ])
  ])]
})
export class ShoppingCartFormComponent implements OnInit {

  products:Product[] = [];

  firstName:string = "";
  lastName:string = "";
  address:string = "";
  city:string = "";
  state: string = "";
  postalCode: string = "";
  phone:string = "";
  email:string = "";
  phone2: string = "";
  email2: string = "";
  note:string = "";


  orderToSend:Order = new Order;

  totalCost:number = 0;

  showExtraContactInfoFormField: boolean = false;

  constructor(private os:OrderService, private _location: Location, private _router: Router) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.totalCost = this.getTotalCost();
  }

  loadData() {
    this.orderToSend.customerFirstName = this.firstName;
    this.orderToSend.customerLastName = this.lastName;
    this.orderToSend.customerAddress = this.address;
    this.orderToSend.customerCity = this.city;
    this.orderToSend.customerPostalCode = this.postalCode;
    this.orderToSend.customerState = this.state;
    this.orderToSend.customerEmail = this.email;
    this.orderToSend.customerPhone = this.phone;
    this.orderToSend.customerEmail2 = this.email2;
    this.orderToSend.customerPhone2 = this.phone2;
    this.orderToSend.customerNote = this.note;
    this.orderToSend.date = new Date();
    this.orderToSend.price = this.totalCost;
    this.orderToSend.productso = this.products;
    this.orderToSend.title = "newOrder " + this.firstName + " " + this.lastName;

    //console.log(this.orderToSend);

  }

  purchase()
  {
    let record = {};

    record['customerFirstName'] = this.orderToSend.customerFirstName;
    record['customerLastName'] = this.orderToSend.customerLastName;
    record['customerAddress'] = this.orderToSend.customerAddress;
    record['customerCity'] = this.orderToSend.customerCity;
    record['customerPostalCode'] = this.orderToSend.customerPostalCode;
    record['customerState'] = this.orderToSend.customerState;
    record['customerEmail'] = this.orderToSend.customerEmail;
    record['customerPhone'] = this.orderToSend.customerPhone;
    record['customerEmail2'] = this.orderToSend.customerEmail2;
    record['customerPhone2'] = this.orderToSend.customerPhone2;
    record['customerNote'] = this.orderToSend.customerNote;
    record['date'] = this.orderToSend.date;
    record['price'] = this.orderToSend.price;

    let prs = [];
    this.products.forEach(element => {

      prs.push(element.id);
      
    });
    console.log(prs);
    record['products'] = prs;
    record['title'] = this.orderToSend.title;
    record['delivered'] = this.orderToSend.delivered;

    this.os.createOrder(record).then(resp =>
      {
       
        this.orderToSend = new Order;
        localStorage.setItem("cart", "[]");
        this.resetForm();
        this.totalCost = 0;
        this.ngOnInit();
        
        console.log(resp);
      })
      .catch(error =>
      {
        console.log(error);
      });
    
    

  }

  resetForm(): void {
    this.firstName = "";
    this.lastName = "";
    this.address = "";
    this.city = "";
    this.postalCode = "";
    this.state = "";
    this.email = "";
    this.email2 = "";
    this.phone = "";
    this.phone2 = "";
    this.note = "";
  }  

  checkForm(): boolean {
    if(this.firstName != "" && this.lastName != "" && this.address != "" &&
      this.city != "" && this.postalCode != "" && this.state != "" && this.email != "" && this.phone != "" && 
      this.products.length != 0 && this.email.includes('@')) {
       return false
    }
    return true;
   }


  getTotalCost() {
    return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
  }

 
  onSubmit() {
    alert('Hvala na saradnji!');
  }

  goBack() {
    this.resetForm();
    this._location.back();
  }

  homePage() {
    this._router.navigate(['']);
  }

  states = [
    {name: 'Srbija', abbreviation: 'SRB'},
    {name: 'Bosna i Hercegovina', abbreviation: 'BiH'}
  ]


 
}
