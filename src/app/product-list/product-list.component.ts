import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  selected: any;

  categories:string[] = ["Torbe", "Rančevi", "Novčanici"];

  productName:string = "";
  productDescription:string = "";
  productPrice:number = 0;
  productAmount:number = 0;
  productCategory:string = "";

  menuOpened:boolean = false;

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(actionArray =>{

      this.products = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Product}
          console.log(this.products);
      })
    });
    
  }

  openMenu()
  {
    this.menuOpened = !this.menuOpened;

  }

  createProduct()
  {
    let record = {};
    record['name'] = this.productName;
    record['price'] = this.productPrice;
    record['category'] = this.productCategory;
    record['description'] = this.productDescription;
    record['amount'] = this.productAmount;
    this.ps.createProduct(record).then(resp =>{
      this.productName = "";
      this.productPrice = 0;
      this.productDescription = "";
      this.productCategory = "";
      this.productAmount = 0;
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }

  deleteProduct(productId)
  {
    this.ps.deleteProduct(productId);
  }

  store(id: string): void {
    localStorage.setItem('productId', id);
  }

}
