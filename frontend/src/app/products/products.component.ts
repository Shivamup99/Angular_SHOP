import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() view:'grid' | 'list' |'currentcartitem' | 'previouscartitem'= 'grid';

  constructor() { }

  ngOnInit(): void {
  }

}
