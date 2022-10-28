import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavigationItem } from '../models/models';
import { RegisterComponent } from '../register/register.component';

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
  constructor() { }

  ngOnInit(): void {
  }

  openModal(name:string){
    this.container.clear()
    let compnentType !: Type<any>;
    if(name==='login') compnentType = LoginComponent
    if(name==='register') compnentType = RegisterComponent
    this.container.createComponent(compnentType)
  }

}
