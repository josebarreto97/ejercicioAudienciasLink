import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent
  ]
})
export class GeneralesModule { }
