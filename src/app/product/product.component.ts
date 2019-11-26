import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatDialog } from '@angular/material';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product;

  gotP:any = {};
  constructor(private ps: ProductService, private dialog: MatDialog, private readonly breakpointObserver: BreakpointObserver) { }
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  ngOnInit() {
    this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray =>{

      this.product.name = actionArray.payload.get('name');
      this.product.price = actionArray.payload.get('price');
      this.product.category = actionArray.payload.get('category');
      this.product.amount = actionArray.payload.get('amount');
      this.product.description = actionArray.payload.get('description');
      this.product.picture = actionArray.payload.get('pic');
      });
    console.log(this.product);
  }

  

  openDialog() {
    const d = this.dialog.open(ProductModalComponent, {
      maxWidth: '100vw'
       
      
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        d.updateSize('100vw', '80vh');
      } else {
        d.updateSize('calc(100% - 100px)', '');
      }
    });
    d.afterClosed().subscribe(() => {
      smallDialogSubscription.unsubscribe();
    });

  }

  

}
