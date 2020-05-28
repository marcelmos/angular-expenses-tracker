import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName: string;
  productCost: number;
  productType: string;

  @Output()
  addProductEvent = new EventEmitter<{addName: string, addType: string, addCost: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.productName && this.productCost && this.productType){
      this.addProductEvent.emit({addName: this.productName, addType: this.productType, addCost: this.productCost});
      this.productName = null;
      this.productCost = null;
      this.productType = null;
    }
  }

}
