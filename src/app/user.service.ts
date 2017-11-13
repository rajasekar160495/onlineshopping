import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from './user';

@Injectable()
export class UserService {


  constructor(private http:HttpClient) { }
users:user[];

  isValid(user){
    console.log( 'this.users-->'+this.users);
    console.log( 'local storage-->'+localStorage.getItem("users"));
   if(!this.users){
    this.users=JSON.parse(localStorage.getItem("users"));
  }

    for(let userObject of this.users){
      if(user.username==userObject.name && user.pwd==userObject.password){
        sessionStorage.setItem('isAdmin',JSON.stringify(userObject.isAdmin)); 
        sessionStorage.setItem('isUser','Y');
        return true;
      }
    }

    return false;
  }


fetchUsers(): Promise<user[]> {
  return this.http.get('http://localhost:3000/users')
    .toPromise()
    .then(response => response as user[]);
}
    
    
 }


