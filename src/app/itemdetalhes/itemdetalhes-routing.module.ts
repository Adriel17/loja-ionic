import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemdetalhesComponent } from './itemdetalhes.component';


const routes: Routes = [
  {
    path: '',
    component: ItemdetalhesComponent,    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetalhesRouting {}
