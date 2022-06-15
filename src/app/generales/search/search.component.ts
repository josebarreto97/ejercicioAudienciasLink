import { ResultadosService } from './resultados/resultados.service';
import { Resultado } from './resultados/resultado';
import { Router } from '@angular/router';
import { VisibilidadSearchService } from './visibilidad/visibilidad-search.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchComponent implements OnInit {
  estaVisible: boolean;
  busqueda:string|null;
  resultado: Resultado|null;

  constructor(
    private visibilidadService: VisibilidadSearchService,
    private ResultadosService: ResultadosService,
    private router: Router
    ) {
    this.estaVisible = true;
    this.busqueda = null;
    this.resultado = null;
  }

  ngOnInit(): void {
    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisible: boolean) => {
      this.estaVisible = estaVisible;
    });

    this.ResultadosService.cambioDeResultado.subscribe((nuevoResultado: Resultado) => {
      this.resultado = nuevoResultado;
    })
  }

  public buscar(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/audiencias'], {queryParams: {busqueda: this.busqueda}});
  }

}
