import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AuthguardserviceService implements CanActivate{
  constructor(private userService: UserService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Inside Can Activate');
    console.log(sessionStorage.length);
    console.log(sessionStorage.getItem('requestedUrl')  );
    if (sessionStorage.length>0 && sessionStorage.getItem('isUser')=='Y') {
      console.log('Inside true');
            return true;
    } else {
      console.log(sessionStorage.setItem("requestedUrl",state.url));
      this.router.navigate(['/'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
