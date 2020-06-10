import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosArtistaPageRoutingModule } from './eventos-artista-routing.module';

import { EventosArtistaPage } from './eventos-artista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosArtistaPageRoutingModule
  ],
  declarations: [EventosArtistaPage]
})
export class EventosArtistaPageModule {}
