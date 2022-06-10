import { VisibilidadSearchService } from './../generales/search/visibilidad/visibilidad-search.service';
import { MainIdService } from './../main-service/main-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(
    private mainServiceId: MainIdService,
    private VisibilidadBusquedaService: VisibilidadSearchService
  ) { }

  ngOnInit(): void {
    this.mainServiceId.setearAboutId();
    this.VisibilidadBusquedaService.ocultarBarraDeBusqueda();
  }

}
