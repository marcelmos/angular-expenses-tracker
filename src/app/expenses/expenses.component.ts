import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  dateObj = new Date();
  filterBy: string;


  constructor(public expensesService: ExpensesService) {
  }

  ngOnInit(): void {
  }

  sortBy(){
    if (this.filterBy){
      this.expensesService.sortExpenses(this.filterBy);
    }
  }
}
