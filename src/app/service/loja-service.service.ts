import { Injectable } from '@angular/core';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class LojaServiceService {
  private produtos: Produto[]

  constructor() { 
    this.produtos = [
      {id:1, nome: "Cadeira Gamer Mx5 Giratoria Preto Vermelho",descricao: "A nova linha de Cadeira Gamer Mymax, são as mais iradas do mercado, a MX5 possui design ergonômico e revestimento em tecido sintético. Projetada para proporcionar conforto mesmo após horas jogando. Esse conforto foi obtido através do uso de espuma injetada de alta densidade no encosto e assento, aliado a possibilidade de inclinar o encosto em até 180° e da função balanço.",preco:1200,imagem:"/assets/imagens/cadeira1.jpg",estoque: 3,promocao:true,tipo:"móvel"},
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
