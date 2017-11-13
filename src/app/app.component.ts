import { Component,OnInit } from '@angular/core';
import { user } from './user';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
users:user[];


constructor(private user:UserService){}

  ngOnInit(){
    this.user.fetchUsers().then((data)=>{
      
      localStorage.setItem("users",JSON.stringify(data));
    
    })

  }

}
