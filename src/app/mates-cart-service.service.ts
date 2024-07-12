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
  private _cant:number;
  cartList:BehaviorSubject<Mate[]>;
  cant:BehaviorSubject<number>;
  total:number;

  constructor(private matesData:MatesDataService) {
    this._cartList = [];
    this._cant = 0;
    this.cartList = new BehaviorSubject(this._cartList);
    this.cant = new BehaviorSubject(0);
    this.total = 0;
   }
  
  addToCart(mate: Mate){
    let item = this._cartList.find((v1)=>v1.name == mate.name);
    if(!item){
      this._cartList.push({... mate});
      this._cant ++;
    }else{
      item.quantity += mate.quantity;
    }
    this.cartList.next(this._cartList);
    this.cant.next(this._cant);
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
      this._cant--;
      this.cant.next(this._cant);
      this.cartList.next(this._cartList);
    }
  }
}