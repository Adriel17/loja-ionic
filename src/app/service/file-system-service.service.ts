import { Lexer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Produto } from '../classes/produto';
@Injectable({
  providedIn: 'root'
})
export class FileSystemServiceService {

  constructor() { }

  async salvar(produto: Produto) {
    let dados = JSON.stringify(produto);
      await Filesystem.writeFile({
        path: 'secrets/produto.txt',
        data: dados,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    };

 async ler(){ 
      let prod: Produto[] = [];
      const { data } = await Filesystem.readFile({
        path: 'secrets/produto.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      prod = JSON.parse(data);
      return prod;
    };    
  }