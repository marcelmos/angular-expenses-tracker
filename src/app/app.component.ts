import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracker wydatków';
  productName = '';
  productType = '';
  productDate: string;
  productCost: number;
  monthExpenses: number;

  dateObj = new Date();
  year = this.dateObj.getFullYear();
  month = ('0' + (this.dateObj.getMonth() + 1)).slice(-2);
  day = ('0' + this.dateObj.getDate()).slice(-2);

  productsArray: {name: string, type: string, cost: number, date: string}[] = [];

  addProduct(){
    // this.productDate = dateObj.getFullYear() + '-' + dateObj.getMonth() + 1 + '-' + dateObj.getDay();
    this.productDate = this.year + '-' + this.month + '-' + this.day;
    if (this.productName && this.productType && this.productCost){
      this.productsArray.push({name: this.productName, type: this.productType, cost: this.productCost, date: this.productDate});

      this.productName = '';
      this.productType = '';
      this.productCost = null;
    }

    this.calcMontExpenses();
  }

  deleteProduck(indexId){
    this.productsArray.splice(indexId, 1);
    this.calcMontExpenses();
  }

  calcMontExpenses(){
    const todayDate = this.year + '-' + this.month;
    let expenses = 0;
    this.productsArray.forEach(element => {
      if (element.date.slice(0, 7) === todayDate){ expenses = expenses + element.cost; }
    });
    this.monthExpenses = expenses;
  }
}
