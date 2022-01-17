import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { BiometricWrapper } from '@awesome-cordova-plugins/biometric-wrapper/ngx';
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
  ],
  providers: [Toast, Vibration]
})
export class Folder2Module { }
