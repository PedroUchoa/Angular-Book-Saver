import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent,CardsComponent]
})
export class HomeModule { }
