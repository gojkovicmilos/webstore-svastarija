import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[];

  constructor(private fs: AngularFirestore) { }

  getOrders()
  {
    return this.fs.collection('orders').snapshotChanges();
  }

  getOrderById(id: string) {
    return this.fs.doc('orders/'+id).snapshotChanges();
  }

  getProductDoc(id: string)
  {
    return this.fs.doc('products'+id).ref;
  }

  createOrder(record) {
    return this.fs.collection('orders').add(record);
  }
 
 
  updateOrder(recordId,record){
    this.fs.doc('orders/' + recordId).update(record);
  }
 
  deleteOrder(recordId) {
    this.fs.doc('orders/' + recordId).delete();
  }
}
