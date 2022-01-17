import { Injectable } from '@angular/core';
import { Produto } from '../classes/produto';
import { FileSystemServiceService } from './file-system-service.service';
@Injectable({
  providedIn: 'root',
})
export class LojaServiceService {
  private produtos: Produto[] = [];
  private promoProdutos: Produto[] = [];
  private produtosCadastrar: Produto[] = [
  {id:1, nome: "Cadeira Gamer Mx5 Giratoria Preto Vermelho",descricao: "A nova linha de Cadeira Gamer Mymax, são as mais iradas do mercado, a MX5 possui design ergonômico e revestimento em tecido sintético. Projetada para proporcionar conforto mesmo após horas jogando. Esse conforto foi obtido através do uso de espuma injetada de alta densidade no encosto e assento, aliado a possibilidade de inclinar o encosto em até 180° e da função balanço.",preco:1200,imagem:"/assets/imagens/cadeira1.jpg",estoque: 3,promocao:true,tipo:"móvel"},
  {id:2, nome:"Banco retrátil",descricao:"banco pequeno para viagem",preco:150,imagem:"/assets/imagens/banco.jpg",estoque: 5,promocao:false,tipo:"móvel"},
  {id:3, nome: "Cadeira de escritorio",descricao: "Cadeira egornomica",preco:500,imagem:"/assets/imagens/cadeira5.jpg",estoque: 5,promocao:false,tipo:"móvel"},
  {id:4, nome: "Cadeira confortável",descricao: "Cadeira macia",preco:399,imagem:"/assets/imagens/cadeira6.jpg",estoque: 10,promocao:true,tipo:"móvel"},
  {id:5, nome: "Puff",descricao: "Almofada",preco:50,imagem:"/assets/imagens/cadeira4.jpg",estoque: 9,promocao:true,tipo:"móvel"},
  {id:6, nome: "Cadeira de bar",descricao: "Cadeira para bares",preco:30,imagem:"/assets/imagens/cadeira3.jpg",estoque: 10,promocao:true,tipo:"móvel"},
  {id:7, nome: "Cadeira de madeira",descricao: "Cadeira para restaurantes",preco:100,imagem:"/assets/imagens/cadeira2.jpg",estoque: 20,promocao:false,tipo:"móvel"},
  {id:8, nome: "Cadeira chique",descricao: "Cadeira para enfeite",preco:1000,imagem:"/assets/imagens/cadeira7.jpg",estoque: 3,promocao:false,tipo:"móvel"},
]
  constructor(private fileSystemService: FileSystemServiceService) {
  }

  obterPromoProdutos(): Produto[] {
    this.promoProdutos = this.produtos.filter(
      (element) => element.promocao === true
    );
    return this.promoProdutos;
  }

  obterProdutos(): Produto[] {
    return this.produtos;
  }

  obterProdutosId(id: number): Produto {
    return this.produtos.find((element) => element.id === id);
  }


  init(){
    this.fileSystemService.ler().then((res) => {this.produtos = res;}).catch((err) => {
      console.log(err);
      this.fileSystemService.salvar(this.produtosCadastrar);
      this.fileSystemService.ler().then((res) => {this.produtos = res;}).catch((err) => {console.log(err)})
    });
  }
}
