import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  formProduct: Product;
  categories: string[];

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  getProducts()
  {
    return this.fs.collection('products').snapshotChanges();
  }

  getProductById(id: string) {
    return this.fs.doc('products/'+id).snapshotChanges();
  }

  getProduct(id: string): Observable<Product> {
    const productsDocuments = this.fs.doc<Product>('products/' + id);
    return productsDocuments.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
        }))
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

  getCategories() {
    return this.categories;
  }

  setCategories(categories: string[]) {
    this.categories = categories;
  }
  uploadPicture(file:File)
  {
    let retURL = "";
    const path = `test/${Date.now()}_${file.name}.jpg`;
  

  
  


    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        retURL = this.downloadURL;
        this.fs.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );

    return retURL;
  }


}
