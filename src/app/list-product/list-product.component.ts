import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input()
  productsArray = [];
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(indexId){
    this.emitRemove.emit(indexId);
  }

}
