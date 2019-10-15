import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  formProduct: Product;

  constructor(private fs: AngularFirestore) { }

  getProducts()
  {
    return this.fs.collection('articles').snapshotChanges();
  }
  

  createProduct(record) {
    return this.fs.collection('articles').add(record);
  }
 
 
  updateProduct(recordId,record){
    this.fs.doc('articles/' + recordId).update(record);
  }
 
  deleteProduct(recordId) {
    this.fs.doc('articles/' + recordId).delete();
  }


}
