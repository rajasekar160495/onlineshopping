import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ProductserviceService} from '../productservice.service';
import {products} from '../product'


@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((v,i) => i%2==0).map((v,i) => [value[i*2], value[i*2+1]])
  }
} 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  selectedProduct:products;
  constructor(private product:ProductserviceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.product.fetchCartItems().then((data) => {this.products = data;
    console.log(this.products);
    }); }

    deleteProduct(selectedProduct:products){
      this.selectedProduct=selectedProduct;
      console.log('Inside Delete Product');
      console.log(this.selectedProduct);
      this.product.deleteCartItems(selectedProduct.id);
      
    }
}
