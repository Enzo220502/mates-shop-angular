import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-incrementable',
  templateUrl: './input-incrementable.component.html',
  styleUrl: './input-incrementable.component.scss'
})
export class InputIncrementableComponent implements OnInit{

  @Input()
  quantity:number;
  @Input()
  max:number;
  @Output() 
  quantityChange : EventEmitter<number>;
 
  constructor(){ 
    this.quantity = 0;
    this.max=0;
    this.quantityChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  incrementQuantity():void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    if(this.quantity>this.max||this.quantity<0){
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }

  decreaseQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    if(this.quantity>this.max||this.quantity<0){
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: Event): void{
    if(this.quantity > this.max || this.quantity < 0){ 
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }else{
      this.quantityChange.emit(this.quantity);
    }
  }
      

}
