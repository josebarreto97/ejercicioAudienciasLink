import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    PaginaNoEncontradaComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //Se agrega para que funciones el routerLink
    FormsModule,
    HttpClientModule //Se agrega para poder consumir la Api
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    SearchComponent
  ]
})
export class GeneralesModule { }
