import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  file:File;

  product: Product = new Product;

  categories:string[] = ["Torbe", "Rančevi", "Novčanici"];

  constructor(private ps:ProductService, private _router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
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

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.file = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  updateProduct()
  {
    
    //this.product.picture = localStorage.getItem("imgURL");

    //console.log(this.product.picture.search("test%2F"));
    
    let record = {};

    //record['pic'] = this.product.picture.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
    record['pic'] = this.product.picture;
    record['name'] = this.product.name;
    record['price'] = this.product.price;
    record['category'] = this.product.category;
    record['description'] = this.product.description;
    record['amount'] = this.product.amount;
    this.ps.updateProduct(localStorage.getItem('productId'),record).then(resp =>{
      this.product = new Product();
      console.log(resp);
      this._router.navigate(['']);
      this._snackBar.open("Uspešno izmenjen proizvod!");
    }).catch(error => {
      console.log(error);
    });
  }

}
