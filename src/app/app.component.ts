import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Loja', url: '/folder/Loja', icon: 'storefront' },
    { title: 'Carrinho', url: '/folder/Carrinho', icon: 'cart' }
  ];
  constructor() {}
}
