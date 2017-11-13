import { Component, OnInit, Input } from '@angular/core';
import {products} from '../product';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   selectedProduct:products;
  constructor() { }

  ngOnInit() {
    console.log('Inside product component');
    this.selectedProduct=JSON.parse(sessionStorage.getItem('object'));
  }

}
