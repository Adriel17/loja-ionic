import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Folder2Component } from './folder2.component';
import { Folder2RoutingModule } from './folder2-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [Folder2Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Folder2RoutingModule
  ]
})
export class Folder2Module { }
