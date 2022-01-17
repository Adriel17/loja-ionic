import { Lexer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Produto } from '../classes/produto';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
@Injectable({
  providedIn: 'root',
})
export class FileSystemServiceService {
  
  constructor() {}

  async salvar(produto: Produto[]) {
    let dados = JSON.stringify(produto);
      await Filesystem.writeFile({
        path: 'produto.txt',
        data: dados,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
  }

  async ler() {
    let prod: Produto[] = [];
    const { data } = await Filesystem.readFile({
      path: 'produto.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    prod = JSON.parse(data);
    return prod;
  }

    async verificarDiretorio(){
      let retorno: Boolean;
      const files  = await Filesystem.readdir({
        path: '',
        directory: Directory.Documents
      });
      console.log(files.files);
      retorno = files.files.includes("produto.txt");
      return retorno;
    }
}