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
  




}
