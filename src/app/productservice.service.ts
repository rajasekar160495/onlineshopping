import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {products} from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  fetchProducts(): Promise<products[]> {
    return this.http.get('http://localhost:3000/products')
      .toPromise()
      .then(response => response as products[]);
  }

  postUsers(newProduct):Promise<void> {
  console.log('Inside Post user');
  console.log(JSON.stringify(newProduct));
        return this.http
          .post(`http://localhost:3000/products`, newProduct).toPromise()
          .then((response) =>{ 
               console.log(response);
                return null; 
              }); 
   
      }

  putUsers(newProduct,productId):Promise<void> {
        console.log('Inside update product');
        console.log(productId);
        console.log(newProduct);
       
              return this.http
                .put(`http://localhost:3000/products/${productId}`, newProduct).toPromise()
                .then((response) =>{ 
                     console.log(response); });}

  deleteUsers(productId):Promise<void> {
        console.log(productId);
            return this.http
              .delete(`http://localhost:3000/products/${productId}`,productId).toPromise()
              .then((response) =>{ 
                   console.log(response);});}
  
  postOrders(newProduct):Promise<void> {
            console.log('Inside Post user');
            console.log(JSON.stringify(newProduct));
                  return this.http
                    .post(`http://localhost:3000/orders`, newProduct).toPromise()
                    .then((response) =>{ 
                         console.log(response);
                          return null;});}    

  fetchCartItems(): Promise<products[]> {
                  return this.http.get('http://localhost:3000/orders')
                    .toPromise()
                    .then(response => response as products[]);
                }

  deleteCartItems(productId):Promise<void> {
                  console.log(productId);
                      return this.http
                        .delete(`http://localhost:3000/orders/${productId}`,productId).toPromise()
                        .then((response) =>{ 
                             console.log(response);}); }


  
}
