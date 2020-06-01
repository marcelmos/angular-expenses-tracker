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

    // Sort array by date
    this.productsArray = this.productsArray.sort((obj1, obj2) => {
      const date1 = new Date(obj1.date);
      const date2 = new Date(obj2.date);
      return date1 < date2 ? -1 : date1 > date2 ? 1 : 0;
      });

      console.log(this.productsArray);
    // this.productsArray = this.productsArray.sort((obj1, obj2) => {
    //   if (obj1.date < obj2.date){ return 1; }
    //   if (obj1.date > obj2.date){ return -1; }
    //   return 0;
    // });

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

    this.productsArray = this.productsArray.sort((obj1, obj2) => {
      if (obj1.date > obj2.date){
        return 1;
      }
      if (obj1.date < obj2.date){
        return -1;
      }

      return 0;
    });
  }
}
