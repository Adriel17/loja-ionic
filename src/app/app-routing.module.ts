import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/welcome',
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
  },
  {
    path: 'folder/promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then(m => m.PromocoesModule)

  },
  {
    path: 'folder/welcome',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
