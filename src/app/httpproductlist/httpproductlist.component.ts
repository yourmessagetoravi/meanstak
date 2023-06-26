import { Component, OnInit } from '@angular/core';
import{HttpproductlistService} from '../httpproductlist.service'


@Component({
  selector: 'app-httpproductlist',
  templateUrl: './httpproductlist.component.html',
  styleUrls: ['./httpproductlist.component.css']
})
export class HttpproductlistComponent implements OnInit {

  objects:any = [];
  constructor(private productlist:HttpproductlistService){

  }
  ngOnInit(): void {
    this.productlist.getProducts().subscribe((data: any) =>{this.objects = data});
    
  }
 

  

}
