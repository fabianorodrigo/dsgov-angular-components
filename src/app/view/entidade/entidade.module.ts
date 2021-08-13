import { InputModule } from './../../shared/components/input/input.module';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { TabelaModule } from './../../shared/components/tabela/tabela.module';
import { MaterialModule } from './../../material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadeListaComponent } from './entidade-lista/entidade-lista.component';
import { EntidadeFormComponent } from './entidade-form/entidade-form.component';
import { DsgovModule } from 'src/app/dsgov/dsgov.module';

@NgModule({
  declarations: [EntidadeListaComponent, EntidadeFormComponent],
  imports: [CommonModule, RouterModule, MaterialModule, TabelaModule, EntidadeRoutingModule, InputModule, DsgovModule],
})
export class EntidadeModule {}
