import { Injectable } from '@angular/core';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class LojaServiceService {
  private produtos: Produto[]

  constructor() { 
    this.produtos = [
      {id:1, nome: "Cadeira gamer",descricao: "Cadeira gamer vermelha",preco:1200,imagem:"/assets/imagens/cadeira1.jpg",estoque: 3,promocao:true,tipo:"móvel"},
      {id:2, nome:"Banco retrátil",descricao:"banco pequeno para viagem",preco:150,imagem:"/assets/imagens/banco.jpg",estoque: 5,promocao:false,tipo:"móvel"},
      {id:3, nome: "Cadeira de escritorio",descricao: "Cadeira egornomica",preco:500,imagem:"/assets/imagens/cadeira5.jpg",estoque: 5,promocao:false,tipo:"móvel"}
    ]
  }

  obterProdutos(): Produto[] {
    return this.produtos
  }

  obterProdutosId(id: number): Produto {
    return this.produtos.find(element => element.id === id)
  }
}
