import { Component, OnInit,Input } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup, FormControl,Validators} from '@angular/forms';
import {ProductserviceService} from '../productservice.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {products} from '../product';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  selectedProduct:products=null;
  form;
  pName:string='';
  pDescription:string='';
  pPrice:number;
  pImage:string='';
  p:number;

  constructor(private productService:ProductserviceService) { }


  ngOnInit(){
    this.form = new FormGroup({
      productName: new FormControl("",Validators.required),
      productDescription: new FormControl("",Validators.required),
      productPrice: new FormControl("",Validators.required),
      productImage: new FormControl("",Validators.required)})
if(sessionStorage.getItem('object')!=null){
  this.bindTextBox();
}  
}

bindTextBox(){
  console.log('Inside bind text');
  console.log(sessionStorage.getItem('object'));
  this.selectedProduct=JSON.parse(sessionStorage.getItem('object'));

 this.pName=this.selectedProduct.name;
 this.pDescription=this.selectedProduct.description;
 this.pPrice=this.selectedProduct.price;
 this.pImage=this.selectedProduct.image;
 this.p=this.selectedProduct.id; 
  console.log(this.selectedProduct);

}


  validateForm = (user)=>{
    let  productDetails={
      name:user.productName,
      description:user.productDescription,
      price:user.productPrice,
      image:user.productImage
    }
    if(sessionStorage.getItem("isEdit")=='Y'){
      sessionStorage.setItem("isEdit","N");
      sessionStorage.removeItem("object");
      this.productService.putUsers(productDetails,this.selectedProduct.id);
    }else{
       this.productService.postUsers(productDetails);
    }  
  }
}
