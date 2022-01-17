import { Component, OnInit } from '@angular/core';
import { BiometricWrapper } from '@awesome-cordova-plugins/biometric-wrapper/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { ItemPedido } from '../classes/itemPedido';
import { CarrinhoService } from '../service/carrinho-service.service';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-folder2',
  templateUrl: './folder2.component.html',
  styleUrls: ['./folder2.component.scss'],
})
export class Folder2Component implements OnInit {
  public itemCarrinho: ItemPedido[];
  public total: number;
  constructor(private carrinhoService: CarrinhoService, private toast: Toast, private viber: Vibration) {
    this.itemCarrinho = carrinhoService.obterItem();
    this.total = carrinhoService.calcularTotal();
  }

  ngOnInit() {}

  remover(id: number) {
    this.carrinhoService.removerItem(id);
    this.itemCarrinho = this.carrinhoService.obterItem();
    this.total = this.carrinhoService.calcularTotal();
  }

  finalizarCompra() {
    this.carrinhoService.removerTodosItens();
    this.itemCarrinho = this.carrinhoService.obterItem();
    this.total = this.carrinhoService.calcularTotal();
    this.toast.show('Compra finalizada com Sucesso', '5000', 'top').subscribe(
      toast => {
        console.log(toast);
      }
    );
    this.viber.vibrate([500,200,800]);
  }
}
