import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../classes/produto';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  public listaProdutos: Produto[];
  public produto: Produto; 

  constructor(private activatedRoute: ActivatedRoute) {
    this.listaProdutos = [
      {id:1, nome: "Cadeira gamer",descricao: "Cadeira gamer vermelha",preco:1200,imagem:"cadeira1.png",estoque: 3,promocao:true,tipo:"móvel"},
      {id:2, nome:"Banco retrátil",descricao:"banco pequeno para viagem",preco:150,imagem:"banco.png",estoque: 5,promocao:false,tipo:"móvel"},
      {id:3, nome: "Cadeira de escritorio",descricao: "Cadeira egornomica",preco:500,imagem:"cadeira5.png",estoque: 5,promocao:false,tipo:"móvel"}]
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  expandir(){

    


  }

}
