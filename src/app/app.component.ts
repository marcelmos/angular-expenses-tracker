import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracker wydatków';
  addDate: string;
  monthExpenses: number;

  dateObj = new Date();
  year = this.dateObj.getFullYear();
  month = ('0' + (this.dateObj.getMonth() + 1)).slice(-2);
  day = ('0' + this.dateObj.getDate()).slice(-2);

  productsArray: {name: string, type: string, cost: number, date: string}[] = [
    {name: 'Spotify', type: 'Usługi comiesięczne', cost: 19.99, date: '2020-04-01'},
    {name: 'Netflix', type: 'Usługi comiesięczne', cost: 45, date: '2020-05-15'},
  ];

  addProduct({addName, addType, addCost}){
    this.addDate = this.year + '-' + this.month + '-' + this.day;
    this.productsArray.push({name: addName, type: addType, cost: addCost, date: this.addDate});

    this.calcMontExpenses();
  }

  deleteProduct(indexId){
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
