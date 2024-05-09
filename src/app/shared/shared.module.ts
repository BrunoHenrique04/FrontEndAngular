import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';





@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ]
})
export class SharedModule { }
