import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent {

    nome: string = '';
    validade: string = '';
    preco: number = 0;

    constructor() { }

    ngOnInit(): void { }

    salvarProduto(): void {
      console.log('Nome: ', this.nome);
      console.log('Validade: ', this.validade);
      console.log('Preço: ', this.preco);
      alert('Salvo com Sucesso');

     }


}
