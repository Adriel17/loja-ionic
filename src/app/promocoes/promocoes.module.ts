import { PromocoesComponent } from './promocoes.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocoesRoutingModule } from './promocoes-routing.module';


@NgModule({
  declarations: [PromocoesComponent],
  imports: [
    CommonModule,
    PromocoesRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class PromocoesModule { }
