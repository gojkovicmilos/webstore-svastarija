import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
  }
  categories:string[] = ["Torbe", "Rančevi", "Novčanici"];

  store(category: string) {
    localStorage.setItem('category', category);
  }
}
