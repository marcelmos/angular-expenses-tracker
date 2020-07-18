import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesService } from './services/expenses.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
