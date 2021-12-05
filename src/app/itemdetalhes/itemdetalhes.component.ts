import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPedido } from '../classes/itemPedido';
import { Produto } from '../classes/produto';
import { CarrinhoService } from '../service/carrinho-service.service';
import { LojaServiceService } from '../service/loja-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itemdetalhes',
  templateUrl: './itemdetalhes.component.html',
  styleUrls: ['./itemdetalhes.component.scss'],
})
export class ItemdetalhesComponent implements OnInit {
  public item: Produto
  idItem: number
  quantidade: number
  constructor(private route: ActivatedRoute, private LojaService: LojaServiceService, private Carrinho: CarrinhoService) {
    this.idItem = Number(this.route.snapshot.paramMap.get('id'));
    this.item = LojaService.obterProdutosId(this.idItem);
  }

  ngOnInit() {

  }

  additem() {
    var temp: ItemPedido = {
      produto: this.item,
      quantidade: this.quantidade
    }
    console.log(this.item)
    this.Carrinho.adicionarItem(temp)
  }

}
