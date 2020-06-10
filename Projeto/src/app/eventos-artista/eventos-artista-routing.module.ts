import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosArtistaPage } from './eventos-artista.page';

const routes: Routes = [
  {
    path: '',
    component: EventosArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosArtistaPageRoutingModule {}
