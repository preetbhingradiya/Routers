import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './services/authguard.service';
import { CanActivate } from './auth.gard';

export const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:"full"
  // },
  { path: "", component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path:'home', canActivateChild:[AuthguardService] ,children:[
    { path:'user', component:HomeComponent}
  ]},
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductComponent,canActivate:[ AuthguardService] },  // before the 14 ersion use this method
  // { path: 'products', component: ProductComponent,canActivate:[CanActivate] },   //use the separet file of canActived and child

  { path: 'login', component: LoginComponent,canDeactivate:[AuthguardService] },  // before the 14 ersion use this method
  // { path: 'login', component: LoginComponent,canDeactivate:[(comp:LoginComponent)=>comp.canExit()] },
  { path: '**', component: NotFoundComponent },
];
