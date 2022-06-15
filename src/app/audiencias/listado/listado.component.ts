import { HorarioService } from './../../generales/horarios/horario.service';
import { ResultadosService } from './../../generales/search/resultados/resultados.service';
import { MainIdService } from './../../main-service/main-id.service';
import { VisibilidadSearchService } from './../../generales/search/visibilidad/visibilidad-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  busqueda: string;

  constructor(
    private visibilidadBarraBusquedaService: VisibilidadSearchService,
    private mainIdService: MainIdService,
    private resultadosService: ResultadosService,
    private horarioService: HorarioService,
    private ruta: ActivatedRoute
  ) {
    console.log('constructo de Listado');
    this.busqueda = "";
  }

  ngOnInit(): void {
    this.visibilidadBarraBusquedaService.hacerVisibleBarraDeBusqueda();
    this.mainIdService.setearSearcherId();
    //otra forma
    //this.ruta.snapshot.queryParamsMap.get('busqueda');
    //this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams.busqueda : "";
    this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams['busqueda'] : "";

    this.buscar();
  }

  private buscar(){
    //ACA DEBERIAMOS IR A UN BACKEND A BUSCAR LAS COINCIDENCIAS
    this.mostrarCantResultados();
    this.mostrarResultados();
  }

  private mostrarCantResultados(){
    this.horarioService.horaActual().subscribe((hora: any) => {
      this.resultadosService.notificarCambioDeResultado({totales: 155, sistemaActual: 155, sistemaAnterior: 0, busqueda: this.busqueda, horario: hora})
    });
  }

  private mostrarResultados(){

  }

}
