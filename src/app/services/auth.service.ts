import { DoCheck, Injectable, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: Boolean = false ;
  userService: UserService = inject(UserService)

  constructor() { }


  login(username: string, password: string) {
    let user = this.userService.user.find((ele) => ele.username == username && ele.password == password)
    // debugger;
    if (user === undefined) {
      this.isLogged = false;
      // console.log(this.isLogged);
    } else {
      this.isLogged = true;

      const item = {
        value:user,
        expiry: 1*60*1000,
      }
      window.localStorage.setItem("key", JSON.stringify(item.value.name))
    }

    return user
  }

  isAuthentication(){
    return this.isLogged
  }

  logOut() {
    window.localStorage.removeItem('key')
  }

}
