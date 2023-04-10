import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cadastrarPage } from './cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: cadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cadastrarPageRoutingModule {}
