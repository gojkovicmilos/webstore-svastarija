import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router: Router, private us: UserService) { }

  canActivate(): boolean {
    if (this.us.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['404']);
      return false;
    }
  }
}
