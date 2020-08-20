import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private productsArrayObs = new BehaviorSubject<Array<object>>([]);
  productsArray: Array<Product>;

  monthExpenses: number;
  sortedExpensesValue: number;

  // Data pre generation
  dateObj = new Date();
  year = this.dateObj.getFullYear();
  month = ('0' + (this.dateObj.getMonth() + 1)).slice(-2);
  day = ('0' + this.dateObj.getDate()).slice(-2);

  constructor() {
    this.productsArray = [
      {name: 'Spotify', type: 'Usługi comiesięczne', cost: 19.99, date: '2020-03-01'},
      {name: 'Słuchawki', type: 'Elektronika', cost: 49.99, date: '2020-03-11'},
      {name: 'Tesco jedzenie', type: 'Art. spożywcze', cost: 86.42, date: '2020-03-15'},
      {name: 'Spotify', type: 'Usługi comiesięczne', cost: 19.99, date: '2020-04-01'},
      {name: 'Tesco jedzenie + chemia', type: 'Art. spożywcze', cost: 123.75, date: '2020-04-20'},
      {name: 'Spotify', type: 'Usługi comiesięczne', cost: 19.99, date: '2020-05-01'},
      {name: 'Netflix', type: 'Usługi comiesięczne', cost: 45, date: '2020-05-15'},
      {name: 'Lidl jedzenie', type: 'Art. spożywcze', cost: 96.34, date: '2020-05-18'},
      {name: 'Prezent', type: 'Inne', cost: 17.99, date: '2020-05-26'},
    ];
    this.productsArrayObs.next(this.productsArray);
   }

  addProduct(addProduct: any){
    // Create date form
    const addDate = this.year + '-' + this.month + '-' + this.day;
    // Push data
    this.productsArray.push({name: addProduct.name, type: addProduct.type, cost: addProduct.cost, date: addDate});
    this.productsArrayObs.next(this.productsArray);
    // Call function
    this.calcMontExpenses();
  }

  deleteProduct(indexId: number){
    // Remove object from index
    this.productsArray.splice(indexId, 1);
    // Call function
    this.calcMontExpenses();
  }

  // Calc current month expenses
  calcMontExpenses(){
    const todayDate = this.year + '-' + this.month;
    let calc = 0;
    this.productsArray.forEach(element => {
      if (element.date.slice(0, 7) === todayDate){ calc = calc + element.cost; }
    });

    // console.log(this.monthExpenses);
    this.monthExpenses = calc;
  }

  // Calc current month expenses but specific type
  sortExpenses(filterBy){
    const todayDate = this.year + '-' + this.month;
    let calc = 0;
    this.productsArray.forEach(element => {
      if ((element.date.slice(0, 7) === todayDate) && (element.type === filterBy)){ calc = calc + element.cost; }
    });

    // console.log(this.monthExpenses);
    this.sortedExpensesValue = calc;
  }

  getProductsArrayObs(): Observable<Array<object>>{
    return this.productsArrayObs.asObservable();
  }

}
