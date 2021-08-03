import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicaComponent } from './basica/basica.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    BasicaComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
