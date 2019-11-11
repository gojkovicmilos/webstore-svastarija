import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('2s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0s', style({ opacity: 0 }))
    ])
  ]),trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),

  ]
})
export class ShoppingCartComponent implements OnInit {
  
  products:Product[] = [];
  productsWithPosition: any[] = [];
  totalCost:number = 0;

  expandedElement: any | null;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.appendPosition();
    this.totalCost = 0;
    this.totalCost = this.getTotalCost();  

  }


  removeFromCartByPosition(pos: number) {
    for(let i = 0; i < this.productsWithPosition.length; i++) {
      if(this.productsWithPosition[i].position == pos) {
        this.products.splice(this.products.indexOf(this.productsWithPosition[i]), 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.products));
    this.ngOnInit();
  }

  appendPosition(): void {
    if(this.products.length != 0) {
      this.productsWithPosition = this.products;
      for(let i = 0; i < this.productsWithPosition.length; i++) {
        this.productsWithPosition[i]['position'] = i + 1;
      }
    }
  }

  openSnackBar(productName: string) {
    this._snackBar.open(productName+" je uspešno uklonjen iz korpe.", '', {
      duration: 3000,
    });
  }

  

  getTotalCost() {
    if(this.products.length != 0) {
      return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
    }
    return 0;
  }

  
}
