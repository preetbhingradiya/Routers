import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[UserService,AuthService,AuthService]
})
export class AppComponent implements OnInit {
  title = 'route';

  showLoader:boolean=false;
  route:Router=inject(Router)

  ngOnInit(): void {
      this.route.events.subscribe((event:any)=>{
        if(event instanceof NavigationStart){
          this.showLoader=true
        }

        if(event instanceof NavigationEnd){
          this.showLoader=false
        }
      })
  }
}
