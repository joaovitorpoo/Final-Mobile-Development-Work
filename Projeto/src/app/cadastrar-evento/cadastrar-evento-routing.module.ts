import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarEventoPage } from './cadastrar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarEventoPageRoutingModule {}
