import { Component, OnInit,Pipe, PipeTransform,Input } from '@angular/core';
import { Router } from '@angular/router';


import {ProductserviceService} from '../productservice.service';
import {products} from '../product';



@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((v,i) => i%2==0).map((v,i) => [value[i*2], value[i*2+1]])
  }
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   products:any=[];
   selectedProduct:products;
  isAdmin:boolean=false;
   
  constructor(private product:ProductserviceService,private router:Router) { }



  ngOnInit() {
    console.log('is ADmin=----->'+ sessionStorage.getItem('isAdmin'));
     if(JSON.parse(sessionStorage.getItem('isAdmin'))=="Y"){
      this.isAdmin=true;
    } 
    this.getProducts();
      sessionStorage.removeItem("object");
   }

logout(){
  sessionStorage.clear();
  localStorage.clear();
  this.router.navigate(['/']);
 
}
   getProducts(){
    this.product.fetchProducts().then((data) => {this.products = data;

    }); }


    onSelect(selectedProduct:products){

      this.selectedProduct=selectedProduct;
      sessionStorage.setItem("object",JSON.stringify(this.selectedProduct));
      this.router.navigate(['/product']);
    }

deleteProduct(selectedProduct:products){
  this.selectedProduct=selectedProduct;
  console.log('Inside Delete Product');
  console.log(this.selectedProduct);
  this.product.deleteUsers(selectedProduct.id);
  
}

 editProduct(product){
   console.log("inside edit Product");
 sessionStorage.setItem("object",JSON.stringify(product));
 sessionStorage.setItem("isEdit","Y");
 this.router.navigate(['/create']);
 }

    
   }


