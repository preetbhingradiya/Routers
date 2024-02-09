import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  userName:string = ''
  Password:string = ''
  isSubmiteed: boolean = false

  authService: AuthService = inject(AuthService)
  activedRoute: ActivatedRoute = inject(ActivatedRoute)
  Router: Router = inject(Router)

  @ViewChild("username") username: ElementRef
  @ViewChild("password") password: ElementRef

  ngOnInit(): void {
    this.activedRoute.queryParamMap.subscribe((query) => {
      let logout = Boolean(query.get('logout'))

      if (logout) {
        this.authService.logOut()
        alert('You are now logged out.')
      }
    })
  }


  loginUser() {
    let username = this.username.nativeElement.value;
    let password = this.password.nativeElement.value;

    let user = this.authService.login(username, password)

    if (user === undefined) {
      alert("The credential are incorrect");
    } else {
      alert('Wel-come ' + user.name + 'You are logged in...')
      this.Router.navigate(['products'])
    }

    this.isSubmiteed=true
  }

  canExit(){
    if(this.userName || this.Password){
      return confirm('You have unsaved chages. Do you want to navigate way ?')
    }
    else{
      return true
    }
  }
}
