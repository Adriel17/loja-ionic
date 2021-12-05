import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Loja',
    pathMatch: 'full'
  },
  {
    path: 'folder/Loja',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'detalhes/:id',
    loadChildren: () => import('./itemdetalhes/itemdetalhes.module').then(m => m.ItemdetalhesModule)
  },
  {
    path: 'folder/carrinho',
    loadChildren: () => import('./folder2/folder2.module').then(m => m.Folder2Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
