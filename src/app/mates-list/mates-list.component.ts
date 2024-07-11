import { Component } from '@angular/core';
import { Mate } from './Mate';
import { MatesCartServiceService } from '../mates-cart-service.service';
import { MatesDataService } from '../mates-data.service';

@Component({
  selector: 'app-mates-list',
  templateUrl: './mates-list.component.html',
  styleUrl: './mates-list.component.scss'
})

export class MatesListComponent {
  

  matesList : Mate[] = [];

  constructor(private cart : MatesCartServiceService,private matesService : MatesDataService){
    this.matesService.getAll().subscribe(data => this.matesList = data);
  }

  addToCart(mate: Mate) {
    this.cart.addToCart(mate);
    mate.stock -= mate.quantity;
    mate.quantity = 0;
  }

  devolucionCarrito(mate: Mate) {
    let elem = this.matesList.find((v1)=>v1.name == mate.name);
    if(elem){
      elem.stock += mate.quantity;
    }
  }

  
  
}
