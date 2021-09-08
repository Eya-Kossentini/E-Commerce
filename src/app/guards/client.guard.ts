import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

    //add consturctor
    constructor(private router: Router, private userService: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  

  let isLoggedIn = this.userService.isLoggedInClient();

  if (isLoggedIn){
    return true;
  }else{
    this.router.navigate(['/']);
    return false;
  }
  
}
}
