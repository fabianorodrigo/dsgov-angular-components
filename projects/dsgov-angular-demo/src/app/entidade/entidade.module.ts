import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadeComponent } from './entidade/entidade.component';
import { EntidadeTesteComponent } from './entidade-teste/entidade-teste.component';



@NgModule({
  declarations: [
    EntidadeComponent,
    EntidadeTesteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntidadeModule { }
