import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentosPageRoutingModule } from './agendamentos-routing.module';

import { AgendamentosPage } from './agendamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentosPageRoutingModule
  ],
  declarations: [AgendamentosPage]
})
export class AgendamentosPageModule {}
