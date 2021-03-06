import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from '../animations';
import { Product } from '../product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'], 
  animations: [
    slideInAnimation
  ]
})
export class MainNavComponent {

  num: number = 0;

  @ViewChild('drawer', {static: false}) drawer: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private us:UserService, private _router: Router) {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  userLogged()
  {
    return this.us.isLoggedIn();
  }


  signOut()
  {
    this.us.logOut();
    this._router.navigate([""]);
  }

  returnNumber()
  {
    let lista: Product[] = JSON.parse(localStorage.getItem("cart"));
    if(lista != null) {
      return lista.length;
    }
    return this.num;
  }

  closeSideNavOnMobile(): void {
    if(this.drawer._mode == "over") {
      this.drawer.toggle();
    }
  }

}
