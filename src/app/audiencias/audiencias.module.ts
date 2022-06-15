import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienciasRoutingModule } from './audiencias-routing.module';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    AudienciasRoutingModule
  ]
})
export class AudienciasModule { }
