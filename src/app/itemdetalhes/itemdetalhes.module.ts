import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemdetalhesComponent } from './itemdetalhes.component';
import { ItemDetalhesRouting } from './itemdetalhes-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemdetalhesComponent],
  imports: [
    CommonModule,
    IonicModule,
    ItemDetalhesRouting,
    FormsModule  
  ]
})
export class ItemdetalhesModule { }
