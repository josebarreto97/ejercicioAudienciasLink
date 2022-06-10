import { MainIdService } from './main-service/main-id.service';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'audiencias';
  idContainer: string;

  constructor(
    private mainServiceId: MainIdService,
    private cdr: ChangeDetectorRef
  ) {
    this.idContainer = "searcher";
  }

  ngAfterViewInit(): void {
    this.mainServiceId.cambioDeId.subscribe((id:string) => {
      this.idContainer = id;
      this.cdr.detectChanges();
    })
  }
}
