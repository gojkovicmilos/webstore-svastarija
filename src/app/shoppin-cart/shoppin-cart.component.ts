import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {
  



  products:Product[] = [];
  productsWithPosition: any[] = [];

  name:string = "";
  address:string = "";
  note:string = "";
  phone:string = "";
  email:string = "";

  orderToSend:Order = new Order;

  totalCost:number = 0;

  constructor(private os:OrderService) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.appendPosition();
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

      prs.push(this.os.getProductDoc(element.id));
      
    });
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
        console.log(resp);
      }).catch(error =>
        {
          console.log(error);
        });

  }


  removeFromCart(productId)
  {
    this.products.forEach(element => {

      if(element.id == productId)
      this.products.splice(this.products.indexOf(element), 1);

      localStorage.setItem("cart", JSON.stringify(this.products));
      
    });
  }

  appendPosition(): void {
    this.productsWithPosition = this.products
    for(let i = 0; i < this.productsWithPosition.length; i++) {
      this.productsWithPosition[i]['position'] = i + 1;
    }
  }

}
