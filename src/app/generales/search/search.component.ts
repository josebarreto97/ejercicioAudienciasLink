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

  constructor(private visibilidadService: VisibilidadSearchService) {
    this.estaVisible = true;
  }

  ngOnInit(): void {
    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisible: boolean) => {
      this.estaVisible = estaVisible;
    });
  }

}
