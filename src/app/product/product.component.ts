import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product;

  gotP:any = {};
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray =>{

      this.product.name = actionArray.payload.get('name');
      this.product.price = actionArray.payload.get('price');
      this.product.category = actionArray.payload.get('category');
      this.product.quantity = actionArray.payload.get('amount'); // izmenio 'quantity' u amount
      this.product.description = actionArray.payload.get('description');
      this.product.picture = actionArray.payload.get('pic'); // promenio iz picture u pic
      });
    console.log(this.product);
  }

}
