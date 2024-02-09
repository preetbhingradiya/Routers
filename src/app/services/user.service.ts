import { Injectable } from '@angular/core';
import { User } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:User[]=[
    new User(1,"Vinay","js","12345"),
    new User(2,"Akash","mk","4354")
  ]
}
