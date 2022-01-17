import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPedido } from '../classes/itemPedido';
import { Produto } from '../classes/produto';
import { CarrinhoService } from '../service/carrinho-service.service';
import { LojaServiceService } from '../service/loja-service.service';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@Component({
  selector: 'app-itemdetalhes',
  templateUrl: './itemdetalhes.component.html',
  styleUrls: ['./itemdetalhes.component.scss'],
})
export class ItemdetalhesComponent implements OnInit {
  public item: Produto
  idItem: number
  quantidade: number
  constructor(private route: ActivatedRoute, private LojaService: LojaServiceService, private Carrinho: CarrinhoService, private toast: Toast) {
    this.idItem = Number(this.route.snapshot.paramMap.get('id'));
    this.item = LojaService.obterProdutosId(this.idItem);
    this.quantidade = 0;
  }

  ngOnInit() {

  }

  incre(){
    if(this.quantidade < this.item.estoque){
      this.quantidade++;
      console.log(this.quantidade)
    }
    
  }

  decre(){
    if(this.quantidade >= 1){
      this.quantidade--;
      console.log(this.quantidade)
    }
  }

  additem() {
    var temp: ItemPedido = {
      produto: this.item,
      quantidade: this.quantidade
    }
    console.log(this.item)
    this.item.estoque = this.item.estoque - this.quantidade
    this.Carrinho.adicionarItem(temp)
    this.quantidade = 0
    this.toast.show('Produto adicionado ao carrinho', '5000', 'top').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

}
