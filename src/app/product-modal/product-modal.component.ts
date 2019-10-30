import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  product: Product = new Product;

  gotP:any = {};
  constructor(private ps: ProductService) {
    this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray =>{

      this.product.name = actionArray.payload.get('name');
      this.product.price = actionArray.payload.get('price');
      this.product.category = actionArray.payload.get('category');
      this.product.amount = actionArray.payload.get('amount');
      this.product.description = actionArray.payload.get('description');
      this.product.picture = actionArray.payload.get('pic');
      });
    console.log(this.product);
   }

  ngOnInit() {
  }

}
