import { Component, OnInit } from '@angular/core';
import { ItemPedido } from '../classes/itemPedido';
import { CarrinhoService } from '../service/carrinho-service.service';

@Component({
  selector: 'app-folder2',
  templateUrl: './folder2.component.html',
  styleUrls: ['./folder2.component.scss'],
})
export class Folder2Component implements OnInit {
  public itemCarrinho: ItemPedido[]
  public total: number
  constructor(private carrinhoService: CarrinhoService) {
    this.itemCarrinho = carrinhoService.obterItem();
    this.total = carrinhoService.calcularTotal();
  }

  ngOnInit() { }

  remover(id: number) {
    this.carrinhoService.removerItem(id);
    this.itemCarrinho = this.carrinhoService.obterItem();
    this.total = this.carrinhoService.calcularTotal();
  }
}
