import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
    localStorage.setItem("user", "");
    localStorage.setItem("cart", "[]");
  }
  categories:string[] = ["Torbe", "Rančevi", "Novčanici"];

  store(category: string) {
    localStorage.setItem('category', category);
  }
}
