import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  activedRoute:ActivatedRoute=inject(ActivatedRoute)
  Route:Router=inject(Router)
  current:any
  selectionItem:any

  product=[
    {id:1,name:"Mobile",price:15000},
    {id:2,name:"Tv",price:65000},
    {id:3,name:"Smart-Watch",price:3000},
    {id:4,name:"Laptop",price:24500},
    {id:5,name:"Table",price:600},
    {id:6,name:"Books",price:300},
  ]

  ngOnInit(): void {

      // PARAMS

      // this.current = this.activedRoute.snapshot.paramMap.get('id');
      // this.selectionItem=this.product.find((val)=>val.id==this.current)

      // this.activedRoute.params.subscribe((data)=>{
      //   this.current =+ data['id'];
      //   this.selectionItem=this.product.filter((val)=>val.id==this.current)
      // })

      // QUERY-PARAMS

      this.current=this.activedRoute.snapshot.queryParams

      // this.current=this.activedRoute.snapshot.queryParamMap.get('price')

      if(this.current.name==undefined || this.current.name=='' && (this.current.price==undefined || this.current.price=='')){
         this.selectionItem=this.product.map((val)=>val)
      }
      else if(this.current.name){
        this.selectionItem=this.product
        .filter((val)=>val.name.toLowerCase()
        .includes(this.current.name.toLowerCase()))
      }
      else if(this.current.price){
        this.selectionItem=this.product
        .filter((val)=>val.price>this.current.price)
      }

      // this.Route.navigate([',fdb'],{queryParams:{},fragment:''})
  }

}
