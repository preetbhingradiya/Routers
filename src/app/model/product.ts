export class Product {
  constructor(id: number, name: string, price: number) {
    this.id=id,
    this.name=name,
    this.price=price
  }

  id:number;
  name:string;
  price:number
}

export class User{
  constructor(id: number, name: string, username: string,password:string) {
    this.id=id,
    this.name=name,
    this.username=username,
    this.password=password
  }

  id:number;
  name:string;
  username:string;
  password:string
}
