import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { elementAt } from 'rxjs/operators';
import { Order } from '../order';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {


  products:Product[] = [];

  name:string = "";
  address:string = "";
  note:string = "";
  phone:string = "";
  email:string = "";

  orderToSend:Order = new Order;

  totalCost:number = 0;

  constructor() { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
  }


  loadData()
  {
    console.log(this.address);
    this.orderToSend.customerAddress = this.address;
    this.orderToSend.customerEmail = this.email;
    this.orderToSend.customerName = this.name;
    this.orderToSend.customerNote = this.note;
    this.orderToSend.customerPhone = this.phone;

    this.orderToSend.date = new Date();

    this.products.forEach(element => {
      this.totalCost+=element.price;
      
    });

    this.orderToSend.price = this.totalCost;

    this.orderToSend.products = this.products;

    this.orderToSend.title = "newOrder" + this.name;

    console.log(this.orderToSend);


  }


  removeFromCart(productId)
  {
    this.products.forEach(element => {

      if(element.id == productId)
      this.products.splice(this.products.indexOf(element), 1);

      localStorage.setItem("cart", JSON.stringify(this.products));
      
    });
  }

}
