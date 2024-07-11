import { Injectable } from '@angular/core';
import { Mate } from './mates-list/Mate';
import { BehaviorSubject } from 'rxjs';
import { MatesDataService } from './mates-data.service';
import { MatesListComponent } from './mates-list/mates-list.component';

@Injectable({
  providedIn: 'root'
})
export class MatesCartServiceService {
  
  private _cartList : Mate[];
  cartList:BehaviorSubject<Mate[]>;
  total:number;

  constructor(private matesData:MatesDataService) {
    this._cartList = [];
    this.cartList = new BehaviorSubject(this._cartList);
    this.total = 0;
   }
  
  addToCart(mate: Mate){
    let item = this._cartList.find((v1)=>v1.name == mate.name);
    if(!item){
      this._cartList.push({... mate});
    }else{
      item.quantity += mate.quantity;
    }
    this.cartList.next(this._cartList);
  }
  
  getTotal():number{
    for (let index = 0; index < this._cartList.length; index++) {
      this.total += this._cartList[index].price;
    }
    return this.total;
  }

  deleteToCart(mate: Mate):void {
    let unMate = this._cartList.find((v1)=>v1.name == mate.name);
    if(unMate){
      this._cartList = this._cartList.filter((i) => i !== unMate);
      this.cartList.next(this._cartList);
    }
  }
}