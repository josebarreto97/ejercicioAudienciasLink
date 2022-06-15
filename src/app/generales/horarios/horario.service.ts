import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private url: string = environment.apiHorarioURL;

  constructor(
    private http: HttpClient
  ) { }

  public horaActual(){
    return this.http.get(this.url);
    //Invoca la url del atributo url, despues de esto vamos a la carpeta environment
    //funciona de forma asincronica devolviendo un observableasi que tenemos que suscribirnos
    //para obtener el resultado
  }
}
