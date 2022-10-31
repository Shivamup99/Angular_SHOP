import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavigationItem } from '../models/models';
import { ProductsService } from '../products.service';
import { RegisterComponent } from '../register/register.component';
import { Category } from '../models/models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modalTitle!:ElementRef;
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef

  navigationList: NavigationItem[] = [
    {
      category:'electronics',
      subcategories:['mobiles','laptops']
    },
    {
      category:'furniture',
      subcategories:['chairs','tables']
    }
  ]
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategoryList().subscribe(()=>{

    })
  }

  openModal(name:string){
    this.container.clear()
    let compnentType !: Type<any>;
    if(name==='login') compnentType = LoginComponent
    if(name==='register') compnentType = RegisterComponent
    this.container.createComponent(compnentType)
  }

}
