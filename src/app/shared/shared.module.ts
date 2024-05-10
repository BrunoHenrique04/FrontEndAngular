import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';



registerLocaleData(SharedArrayBuffer)

@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[CardProdutoComponent]
})
export class SharedModule { }
