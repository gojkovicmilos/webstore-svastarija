import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];

  constructor(private os: OrderService) { }

  ngOnInit() {
    this.os.getOrders().subscribe(actionArray =>{

      this.orders = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Order}
      })
    });
    
    
  }

  delete(id: string): void {
    this.os.deleteOrder(id);
  }


}
