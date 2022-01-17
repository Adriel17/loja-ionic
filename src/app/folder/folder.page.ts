import { FileSystemServiceService } from './../service/file-system-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Produto } from '../classes/produto';
import { LojaServiceService } from '../service/loja-service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public listaProdutos: Produto[];
  public produto: Produto;

  constructor(
    public platform: Platform,
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    private lojaService: LojaServiceService,
    private fileSystemService: FileSystemServiceService
  ) {
    this.listaProdutos = this.lojaService.obterProdutos();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.listaProdutos = this.lojaService.obterProdutos();
  }
  ngAfterViewInit(){
   
  }
}
