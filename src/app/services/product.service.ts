import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = 'https://localhost:44326/api/';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL+"products/getall"
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
      
      };

      getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {

        let newPath = this.apiURL+"products/getbycategory?categoryId="+categoryId
        return this.httpClient
          .get<ListResponseModel<Product>>(newPath);
          
          };
  
}
