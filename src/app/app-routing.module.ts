import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatesShopComponent } from './mates-shop/mates-shop.component';
import { MatesAboutComponent } from './mates-about/mates-about.component';

const routes: Routes = [
  {path:'mates',component : MatesShopComponent},
  { path:'about', component:MatesAboutComponent},
  { path: ' ', redirectTo: '/mates',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
