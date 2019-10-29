import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {


  products:Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
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
