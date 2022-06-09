import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  estructuraDelPoderEjecutivoNacional = [
    { idBusqueda: 30, nombre: 'Presidencia de la Nación', id: 1179},
    { idBusqueda: 3132, nombre: 'Ministerio de Educación', id: 559},
    { idBusqueda: 3156, nombre: 'Ministerio de Desarrollo Territorial y Hábitat', id: 519},
    { idBusqueda: 3115, nombre: 'Jefatura de Gabinete de Ministros', id: 437},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
