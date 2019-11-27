import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName:string = "";
  productDescription:string = "";
  productPrice:number;
  productAmount:number;
  productCategory:string = "";
  productImage:string = "";
  file:File;

  categories:string[] = ["Torbe", "Rančevi", "Novčanici"];

  constructor(private ps:ProductService, private _router: Router) { }

  ngOnInit() {
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

  createProduct()
  {
    
    this.productImage = localStorage.getItem("imgURL");

    console.log(this.productImage.search("test%2F"));
    
    let record = {};

    record['pic'] = this.productImage.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
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
      this.productImage = "";
      console.log(resp);
      this._router.navigate(['']);
    }).catch(error => {
      console.log(error);
    });
  }

}
