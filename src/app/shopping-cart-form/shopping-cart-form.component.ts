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

  name:string = "";
  address:string = "";
  note:string = "";
  phone:string = "";
  email:string = "";

  orderToSend:Order = new Order;

  totalCost:number = 0;


  constructor(private os:OrderService, private _snackBar: MatSnackBar, private _location: Location, private _router: Router) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.totalCost = this.getTotalCost();
  }

  loadData() {
    this.orderToSend.customerAddress = this.address;
    this.orderToSend.customerEmail = this.email;
    this.orderToSend.customerName = this.name;
    this.orderToSend.customerNote = this.note;
    this.orderToSend.customerPhone = this.phone;
    this.orderToSend.date = new Date();
    this.orderToSend.price = this.totalCost;
    this.orderToSend.products = this.products;
    this.orderToSend.title = "newOrder " + this.name;

    //console.log(this.orderToSend);

  }

  purchase()
  {
    let record = {};

    record['customerAddress'] = this.orderToSend.customerAddress;
    record['customerEmail'] = this.orderToSend.customerEmail;
    record['customerName'] = this.orderToSend.customerName;
    record['customerNote'] = this.orderToSend.customerNote;
    record['customerPhone'] = this.orderToSend.customerPhone;
    record['date'] = this.orderToSend.date;
    record['price'] = this.orderToSend.price;

    let prs = [];
    this.products.forEach(element => {

      prs.push("products/"+ element.id);
      
    });
    console.log(prs);
    record['products'] = prs;
    record['title'] = this.orderToSend.title;

    this.os.createOrder(record).then(resp =>
      {
        this.orderToSend.customerAddress = "";
        this.orderToSend.customerEmail = "";
        this.orderToSend.customerNote = "";
        this.orderToSend.customerName = "";
        this.orderToSend.customerPhone = "";
        this.orderToSend.price = 0;
        this.orderToSend.date = null;
        this.orderToSend.products = [];
        this.orderToSend.title = "";
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
    this.name = "";
    this.address = "";
    this.email = "";
    this.phone = "";
    this.note = "";
  }  

  checkForm(): boolean {
    if(this.name != "" && this.address != "" && this.email != "" && this.phone != "" && this.products.length != 0 && this.email.includes('@')) {
      return false
    }
    return true;
  }


  getTotalCost() {
    return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
  }

  openSnackBar2( ) {
    this._snackBar.open("Uspešno poručeno!", '', {
      duration: 3000,
    });
    
  }

  goBack() {
    this.resetForm();
    this._location.back();
  }

  homePage() {
    this._router.navigate(['']);
  }


 
}
