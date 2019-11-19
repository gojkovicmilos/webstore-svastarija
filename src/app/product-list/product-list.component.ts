import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];

  newProduct:Product;
  productsInCart:Product[] = [];
  filteredProducts:Product[] = this.products;
  selected: any;
  
  num: number = 1;
  arr = new Array<number>(50);

  links: string[] = ['Svi proizvodi', "Torbe", "Rančevi", "Novčanici"];
  activeLink = this.links[0];

  // productName:string = "";
  // productDescription:string = "";
  // productPrice:number;
  // productAmount:number;
  // productCategory:string = "";
  // productImage:string = "";

  // file:File;

  

 


  constructor(private ps: ProductService, private _snackBar: MatSnackBar, private us: UserService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(actionArray =>{

      this.products = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Product}
          
      });
      this.filteredProducts = this.products;
    });
    this.fillArray();

  }

 

  fillArray(): void {
    for(let i = 0; i < 50; i++) {
      this.arr[i] = i+1;
    }
  }

  // onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');
  
  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       this.file = e.target.result;
  //     };
  
  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  // }

  addToCart(productId)
  {
    
    for(let i =0; i<this.num; i++)
    {
      this.products.forEach(element => {
        if(element.id == productId)
        {
        if(element.amount>0)
        this.productsInCart.push(element);
        console.log(element.amount);
        }
      });
    }

    localStorage.setItem("cart", JSON.stringify(this.productsInCart));

  }


  showByCat(c)
  {
    if(c != 'Svi proizvodi') {

      this.filteredProducts = [];
      this.products.forEach(element => {
        if(element.category == c)
        this.filteredProducts.push(element);
      });
    }
    else {
      this.showAll();
    }
  }

showAll()
{
this.filteredProducts = this.products;
}



  // createProduct()
  // {
    
  //   this.productImage = localStorage.getItem("imgURL");

  //   console.log(this.productImage.search("test%2F"));
    
  //   let record = {};

  //   record['pic'] = this.productImage.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
  //   record['name'] = this.productName;
  //   record['price'] = this.productPrice;
  //   record['category'] = this.productCategory;
  //   record['description'] = this.productDescription;
  //   record['amount'] = this.productAmount;
  //   this.ps.createProduct(record).then(resp =>{
  //     this.productName = "";
  //     this.productPrice = 0;
  //     this.productDescription = "";
  //     this.productCategory = "";
  //     this.productAmount = 0;
  //     this.productImage = "";
  //     console.log(resp);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

  deleteProduct(productId: string)
  {
    this.ps.deleteProduct(productId);
  }

  store(id: string): void {
    localStorage.setItem('productId', id);
  }

  
  resetNumber(): void {
    this.num = 1;
  }
  
  openSnackBar(productName: string, amount: number) {
    if(amount > 0) {
      this._snackBar.open(productName+" je uspešno dodat u korpu. ("+this.num.toString()+"x)", '', {
        duration: 3000,
      });
    } 
  }

  openSnackBar2(productName: string) {
    this._snackBar.open("Proizvod " + productName + "je uspešno obrisan!", '', {
      duration: 3000,
    });
  }

  userLogged() {
    return this.us.isLoggedIn();
  }

}