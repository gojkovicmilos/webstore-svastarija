import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { ProductService } from '../product.service';
import { Product } from '../product';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  products: Product[] = [];

  constructor(private os: OrderService, private ps:ProductService) { }

  ngOnInit() {
    this.os.getOrders().subscribe(actionArray =>{

      this.orders = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Order}
      });

      this.orders.forEach(element => {
        let product = new Product();
        element.products.forEach(el =>{
  
  
          this.ps.getProductById(el).subscribe(actionArray =>{

        
            
          
          product.name = actionArray.payload.get('name');
          product.price = actionArray.payload.get('price');
          product.category = actionArray.payload.get('category');
          product.amount = actionArray.payload.get('amount');
          product.description = actionArray.payload.get('description');
          product.picture = actionArray.payload.get('pic');
          
          });

        this.products.push(product);

      
     

      
      
  
        
  
  
      });
      element.productso = this.products;
      this.products = [];
      });
    });

    

    
    
    
  }

  delete(id: string): void {
    this.os.deleteOrder(id);
    
  }


}
