import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  dateObj = new Date();
  filterType: string;
  actualMonth = this.dateObj.getFullYear() + '-' + ('0' + (this.dateObj.getMonth() + 1)).slice(-2);
  filterDate: string;
  dateArray = [];

  constructor(public expensesService: ExpensesService) {
    expensesService.getProductsArrayObs().subscribe((products: Array<Product>) => {
      this.dateArray = products.map(a => a.date.slice(0, 7));
      this.dateArray = this.dateArray.filter((v, i) => products.map(a => a.date.slice(0, 7)).indexOf(v) === i).sort((a, b) => a - b);
    });

  }

  ngOnInit(): void {

  }

  sortBy(){
    if (this.filterType){
      this.expensesService.sortExpenses(this.filterType);
    }
  }
}
