import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup, FormControl,Validators} from '@angular/forms';
import {ProductserviceService} from '../productservice.service';
import {products} from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  form;
  isDisableTextBox:boolean=false;
  selectedProduct:products;


constructor(private productService:ProductserviceService,private router:Router) { }

  ngOnInit(){
   
    this.form = new FormGroup({
      address: new FormControl("",Validators.required),
      mobileNo: new FormControl("",Validators.compose([
        Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),
        Validators.required
      ])),
      cardNo:new FormControl("")
     })
if(sessionStorage.getItem('object')!=null){
  //this.bindTextBox();
}  
this.selectedProduct=JSON.parse(sessionStorage.getItem('object'));
}

  isDisable(value:boolean){

this.isDisableTextBox=value;
console.log(this.isDisableTextBox);


  }
  
  validateForm=(value)=>{
    console.log(value);
    let orderedItem={
    productName:this.selectedProduct.name,
      address:value.address,
      cod:this.isDisableTextBox,
      contact:value.mobileNo,
      ownername:"Rajasekar",
      amount:this.selectedProduct.price,
      image:this.selectedProduct.image,
      description:this.selectedProduct.description
    }
    console.log(orderedItem);
    this.productService.postOrders(orderedItem);
    this.router.navigate(['/dashboard']);
   

  }
}
