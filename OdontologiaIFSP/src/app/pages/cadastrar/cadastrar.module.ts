import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { cadastrarPageRoutingModule } from './cadastrar-routing.module';

import { cadastrarPage } from './cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    cadastrarPageRoutingModule
  ],
  declarations: [cadastrarPage]
})
export class cadastrarPageModule {}
