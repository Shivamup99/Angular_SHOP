import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 suggestedProducts:SuggestedProduct[]=[
  {
    banner:'http://www.covaisriishwaryamenterprises.com/img/slider/bg-1.jpg',
    category:{
      id:0,
      category:'electronics',
      subcategory:'mobiles'
    }
  },
  {
    banner:'https://obsessionoutlet.com/wp-content/uploads/Bedroom-Furniture-Drawing-Room-Furniture-Living-Room-Furniture.jpg',
    category:{
      id:1,
      category:'furniture',
      subcategory:'chairs'
    }
  },
  {
    banner:'https://img.freepik.com/free-vector/hand-drawn-supermarket-twitch-banner_23-2149365586.jpg?w=2000',
    category:{
      id:2,
      category:'grocery',
      subcategory:'grocery'
    }
  },
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
