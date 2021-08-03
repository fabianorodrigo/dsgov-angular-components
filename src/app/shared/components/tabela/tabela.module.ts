import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [TabelaComponent],
  imports: [CommonModule, MatTableModule, MatIconModule, MatPaginatorModule],
  exports: [TabelaComponent],
})
export class TabelaModule {}
