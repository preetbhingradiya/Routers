import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,CanActivateChild, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate,CanActivateChild,CanDeactivate<LoginComponent> {

  authService: AuthService = inject(AuthService)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    try {
      let token = JSON.parse(window.localStorage.getItem("key"))
      if (token == null) {
        return false
      }
      else {
        return true
      }
    } catch (error) {
      return error
    }


    //  if(this.authService.isAuthentication()){
    //   console.log(this.authService.isAuthentication());
    //   return true
    //  }
    //  else{
    //   console.log(this.authService.isAuthentication());
    //   return false
    //  }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.canActivate(childRoute,state) //write the some code if user is loggin then acess the route
  }

  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
      return component.canExit()
  }
}
