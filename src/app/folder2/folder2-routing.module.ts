import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Folder2Component } from './folder2.component';

const routes: Routes = [
  {
    path: '',
    component: Folder2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Folder2RoutingModule {}
