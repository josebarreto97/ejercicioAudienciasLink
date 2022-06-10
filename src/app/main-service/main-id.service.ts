import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainIdService {
  private id: string;
  @Output() cambioDeId: EventEmitter<string>;

  constructor() {
    this.id = "searcher";
    this.cambioDeId = new EventEmitter();
  }

  public getIdDefault(){
    return "searcher";
  }

  public setearAboutId(){
    this.id = "about";
    this.notificarCambios();
  }

  public setearSearcherId(){
    this.id = "searcher";
    this.notificarCambios();
  }

  private notificarCambios(){
    this.cambioDeId.emit(this.id);
  }
}
