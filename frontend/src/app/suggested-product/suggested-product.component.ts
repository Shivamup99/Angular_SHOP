import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/models';

@Component({
  selector: 'app-suggested-product',
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.css']
})
export class SuggestedProductComponent implements OnInit {
  @Input() count:number=3;
  @Input() category:Category ={
    id:0,
    category:'',
    subcategory:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
