import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {
  
  products:Product[] = [];
  productsWithPosition: any[] = [];


  showForm:boolean = false;

  name:string = "";
  address:string = "";
  note:string = "";
  phone:string = "";
  email:string = "";

  orderToSend:Order = new Order;

  totalCost:number = 0;

  constructor(private os:OrderService, private _snackBar: MatSnackBar) { }



  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.appendPosition();
    this.totalCost = 0;
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


  removeFromCart(productId)
  {
    this.products.forEach(element => {
      if(element.id == productId)
      this.products.splice(this.products.indexOf(element), 1);
    });
    localStorage.setItem("cart", JSON.stringify(this.products));
    this.ngOnInit();
  }

  removeFromCartByPosition(pos: number) {
    for(let i = 0; i < this.productsWithPosition.length; i++) {
      if(this.productsWithPosition[i].position == pos) {
        this.products.splice(this.products.indexOf(this.productsWithPosition[i]), 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.products));
    this.ngOnInit();
  }

  appendPosition(): void {
    this.productsWithPosition = this.products;
    for(let i = 0; i < this.productsWithPosition.length; i++) {
      this.productsWithPosition[i]['position'] = i + 1;
    }
  }

  openSnackBar(productName: string) {
    this._snackBar.open(productName+" je uspešno uklonjen iz korpe.", '', {
      duration: 3000,
    });
  }

  openSnackBar2( ) {
    this._snackBar.open("Uspešno poručeno!", '', {
      duration: 3000,
    });
    
  }

  resetForm(): void {
    this.name = "";
    this.address = "";
    this.email = "";
    this.phone = "";
    this.note = "";
  }

  getTotalCost() {
    return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
  }

}
