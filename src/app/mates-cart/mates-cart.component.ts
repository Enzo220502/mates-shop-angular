import { Component } from '@angular/core';
import { MatesCartServiceService } from '../mates-cart-service.service';
import { Mate } from '../mates-list/Mate';
import { isEmpty, Observable } from 'rxjs';
import { MatesListComponent } from '../mates-list/mates-list.component';
import { MatesDataService } from '../mates-data.service';

@Component({
  selector: 'app-mates-cart',
  templateUrl: './mates-cart.component.html',
  styleUrl: './mates-cart.component.scss'
})
export class MatesCartComponent {

  cartList$:Observable<Mate[]> = this.cartService.cartList.asObservable();
  cantElementos:number = this.cartList$.subscribe.length;
  matesListComponent: MatesListComponent;
  
  constructor(private cartService : MatesCartServiceService, private matesData:MatesDataService){
    this.matesListComponent = new MatesListComponent(this.cartService,this.matesData);
  }
  eliminarProducto(mate: Mate) {
    this.cartService.deleteToCart(mate);
    this.matesListComponent.devolucionCarrito(mate);
  }



}
