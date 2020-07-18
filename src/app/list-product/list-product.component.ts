import { Component, OnInit, DoCheck } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, DoCheck {

  productsArray: Array<Product> = [];

  constructor(private expensesService: ExpensesService) {
    expensesService.getProductsArrayObs().subscribe((products: Array<Product>) => {
      this.productsArray = products;
    });
  }

  ngDoCheck(): void {
    console.log('Changes detected!');
    // Sort array by date
    this.productsArray = this.productsArray.sort((obj1, obj2) => {
      const date1 = new Date(obj1.date);
      const date2 = new Date(obj2.date);
      return date1 > date2 ? -1 : date1 < date2 ? 1 : 0;
    });
}

  ngOnInit(): void {
  }

  deleteProduct(indexId: number){
    this.expensesService.deleteProduct(indexId);
  }

}
