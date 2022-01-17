import { FileSystemServiceService } from './service/file-system-service.service';
import { Component } from '@angular/core';
import { LojaServiceService } from './service/loja-service.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  public appPages = [
    { title: 'Página inicial', url: '/folder/welcome', icon: 'home'},
    { title: 'Loja', url: '/folder/Loja', icon: 'storefront' },
    { title: 'Carrinho', url: '/folder/carrinho', icon: 'cart' },
    { title: 'Promoções', url: '/folder/promocoes', icon: 'pricetags'},
    
  ];
  constructor(private lojaServiceService: LojaServiceService) {
    this.lojaServiceService.init();  
  }   
}
