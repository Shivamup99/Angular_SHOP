import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {Category} from '../app/models/models'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getCategoryList(){
    let url = environment.baseurl+'category'
    return this.http.get<any[]>(url).pipe(map((categories: any)=>{
      categories.map((category: { id: any; name: any; subName: any; })=>{
        let mapedCategory: Category ={
          id:category.id,
          category:category.name,
          subcategory:category.subName
        };
        return mapedCategory;
      })

    }))
  }
}
