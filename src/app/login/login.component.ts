import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { user } from '../user';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  users:user[];

  constructor(private router:Router,private userservice:UserService,private user:UserService, private _flashMessagesService: FlashMessagesService) { }

 ngOnInit(){
  
 }


validateForm(user){

   if(this.userservice.isValid(user)){
     console.log('valid user');
     console.log(sessionStorage.getItem("requestedUrl"));
     sessionStorage.setItem("isEdit","N");
    if(sessionStorage.getItem("requestedUrl")!==null){
      let url=sessionStorage.getItem("requestedUrl");
      if(url===('/payment')||url===('/product')){
        console.log('Inside If validate form');
        console.log(url);
        url='/cart';
      }
      this.router.navigate([`${url}`]);
    }else{
      this.router.navigate(['/dashboard']);
    }
     
   }else{
     console.log('invalid user');
     this._flashMessagesService.show('Invalid User Name or Password!!! Kindly Login :)', { cssClass: 'alert-warning', timeout: 4000 });
     this.router.navigate(['/']);
   }
 }
}
