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
  np:Product[] = [];

  constructor(private os: OrderService, private ps:ProductService) { }

  ngOnInit() {

    this.ps.getProducts().subscribe(actionArray =>{

      this.products = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Product}
          
      });
    });

    this.os.getOrders().subscribe(actionArray =>{

      this.orders = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Order}
      });

      this.orders.forEach(order =>{

        order.products.forEach(product =>{

          this.products.forEach(p =>{

            if(p.id == product)
            {
            this.np.push(p);
            }
          });

        });

        order.productsO = this.np;
        this.np = [];

      });




    });

    

    
    
    
  }

  delete(id: string): void {
    this.os.deleteOrder(id);
    
  }

  setDelivered(id: string)
  {
    this.os.setDelivered(id);
  }


}
