import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatesListComponent } from './mates-list/mates-list.component';
import { MatesCartComponent } from './mates-cart/mates-cart.component';
import { FormsModule } from '@angular/forms';
import { MatesAboutComponent } from './mates-about/mates-about.component';
import { MatesShopComponent } from './mates-shop/mates-shop.component';
import { InputIncrementableComponent } from './input-incrementable/input-incrementable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MatesListComponent,
    MatesCartComponent,
    MatesAboutComponent,
    MatesShopComponent,
    InputIncrementableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
