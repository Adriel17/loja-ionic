import { ActivatedRoute } from '@angular/router';
import { LojaServiceService } from './../service/loja-service.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../classes/produto';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent implements OnInit {
  public promoProdutos: Produto[] = [];
  public folder: string;

  constructor(private lojaService: LojaServiceService,private activatedRoute: ActivatedRoute) {
    this.promoProdutos = this.lojaService.obterPromoProdutos();
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
