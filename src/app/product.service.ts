import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  formProduct: Product;
  categories: string[];

  constructor(private fs: AngularFirestore) { }

  getProducts()
  {
    return this.fs.collection('products').snapshotChanges();
  }

  getProductById(id: string) {
    return this.fs.doc('products/'+id).snapshotChanges();
  }

  createProduct(record) {
    return this.fs.collection('products').add(record);
  }
 
 
  updateProduct(recordId,record){
    this.fs.doc('products/' + recordId).update(record);
  }
 
  deleteProduct(recordId) {
    this.fs.doc('products/' + recordId).delete();
  }

  setCategories(categories: string[]) {
    this.categories = categories;
  }

  getCategories() {
    return this.categories;
  }


}
