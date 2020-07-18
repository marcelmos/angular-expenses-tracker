import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName: string;
  productCost: number;
  productType: string;

  // @Output()
  // addProductEvent = new EventEmitter<{addName: string, addType: string, addCost: number}>();

  constructor(private expensesService: ExpensesService) {

  }

  ngOnInit(): void {
  }

  addProduct(){
    if (this.productName && this.productCost > 0 && this.productType){
      // this.addProductEvent.emit({addName: , addType: , addCost: });
      const product: Product = ({name: this.productName, type: this.productType, cost: this.productCost, date: ''});
      this.expensesService.addProduct(product);
      this.productName = null;
      this.productCost = null;
      this.productType = null;
    }
  }

}
