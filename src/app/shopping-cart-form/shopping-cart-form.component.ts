import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { Location } from '@angular/common'
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('2s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0s', style({ opacity: 0 }))
    ])
  ])]
})
export class ShoppingCartFormComponent implements OnInit {

  products:Product[] = [];

  private formGroup: FormGroup;



  orderToSend:Order = new Order;

  totalCost:number = 0;

  showExtraContactInfoFormField: boolean = false;

  constructor(private os:OrderService, private _location: Location, private _router: Router, private _formBuilder: FormBuilder) { }

  createForm() {
    this.formGroup = this._formBuilder.group({
      "firstName": ['', Validators.required],
      "lastName": ['', Validators.required],
      "address": ['', Validators.required],
      "city": ['', Validators.required],
      "state": ['', Validators.required],
      "postalCode": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      "phone": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]], 
      "phone2": [null],
      "email2": [null, Validators.email],
      "note": [null]

    });
  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.totalCost = this.getTotalCost();
    this.createForm();
  }

 

  purchase()
  {
    let record = {};

    record['customerFirstName'] = this.orderToSend.customerFirstName;
    record['customerLastName'] = this.orderToSend.customerLastName;
    record['customerAddress'] = this.orderToSend.customerAddress;
    record['customerCity'] = this.orderToSend.customerCity;
    record['customerPostalCode'] = this.orderToSend.customerPostalCode;
    record['customerState'] = this.orderToSend.customerState;
    record['customerEmail'] = this.orderToSend.customerEmail;
    record['customerPhone'] = this.orderToSend.customerPhone;
    record['customerEmail2'] = this.orderToSend.customerEmail2;
    record['customerPhone2'] = this.orderToSend.customerPhone2;
    record['customerNote'] = this.orderToSend.customerNote;
    record['date'] = this.orderToSend.date;
    record['price'] = this.orderToSend.price;

    let prs = [];
    this.products.forEach(element => {

      prs.push(element.id);
      
    });
    console.log(prs);
    record['products'] = prs;
    record['title'] = this.orderToSend.title;
    record['delivered'] = this.orderToSend.delivered;

    this.os.createOrder(record).then(resp =>
      {   
        this.orderToSend = new Order;
        localStorage.setItem("cart", "[]");
        this.formGroup.reset();
        this.totalCost = 0;
        this.ngOnInit();  
        console.log(resp);
      })
      .catch(error =>
      {
        console.log(error);
      }); 

  }



  getTotalCost() {
    if(this.products != null) {
      return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
    }
    return 0;
  }

 
  notification() {
    alert('Hvala na saradnji!');
  }

  goBack() {
    this.formGroup.reset();
    this._router.navigate(['cart']);
  }

  homePage() {
    this._router.navigate(['']);
  }

  states = [
    {name: 'Srbija', abbreviation: 'SRB'},
    {name: 'Bosna i Hercegovina', abbreviation: 'BiH'}
  ];

  onSubmit(post) {
    this.orderToSend.customerFirstName = post.firstName;
    this.orderToSend.customerLastName = post.lastName;
    this.orderToSend.customerAddress = post.address;
    this.orderToSend.customerCity = post.city;
    this.orderToSend.customerPostalCode = post.postalCode;
    this.orderToSend.customerState = post.state;
    this.orderToSend.customerEmail = post.email;
    this.orderToSend.customerPhone = post.phone;
    this.orderToSend.customerEmail2 = post.email2;
    this.orderToSend.customerPhone2 = post.phone2;
    this.orderToSend.customerNote = post.note;
    this.orderToSend.date = new Date();
    this.orderToSend.price = this.totalCost;
    this.orderToSend.productsO = this.products;
    this.orderToSend.title = "newOrder " + post.firstName + " " + post.lastName;
 
    this.purchase();
    this.formGroup.reset();
    this.notification();
    this.homePage();
  }

  getPostalCodeLen() {
    let len = String(this.formGroup.get('postalCode').value).length;
    return len;
  }
}
