import { Injectable } from '@angular/core';
import { ItemPedido } from '../classes/itemPedido';
import { LojaServiceService } from './loja-service.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private item: ItemPedido[];
  constructor(private lojaService: LojaServiceService) {
    this.item = []
  }

  existe(id: number): boolean {
    if(this.item.length > 0){
      return this.item.some(row => row.produto.id === id)
    }else{
      return false
    }
    
  }

  adicionarItem(itemComprando: ItemPedido) {
    if (this.existe(itemComprando.produto.id)) {
      console.log("entrou em cima")
      this.item.forEach(element => {
        if (element.produto.id == itemComprando.produto.id) {
          element.quantidade += itemComprando.quantidade;
        }
      });
    } else {
      console.log("entrou")
      this.item.push(itemComprando);
    }
    console.log(this.item);
  }
  removerItem(itemRemover: number): boolean {
    if (this.existe(itemRemover)) {
      for (var i = 0; i < this.item.length; i++) {
        if (this.item[i].produto.id === itemRemover) {
          this.item.splice(i, 1);
        }
      }
      return true
    }
  }

  obterItem(): ItemPedido[] {
    return this.item;
  }

  calcularTotal(): number {
    var total: number = 0;
    this.item.forEach(element => {
      total += (element.produto.preco * element.quantidade);
    });
    return total;
  }
}
