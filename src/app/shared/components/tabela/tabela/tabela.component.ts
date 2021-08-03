import { EntidadeDadosBasica } from './../../../core/data/entidadeDadosBasica';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Coluna } from '../coluna';

@Component({
  selector: 'br-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() tamanhoPagina: number = 10;
  @Input() colunas: Coluna[];
  @Input() exibeColunaAcoes: boolean;

  //com o Output EventEmitter é possível enviar valor do filho para um componente pai
  @Output() onVisualiza = new EventEmitter<EntidadeDadosBasica>();
  @Output() onEdita = new EventEmitter<EntidadeDadosBasica>();
  @Output() onExclui = new EventEmitter<EntidadeDadosBasica>();

  constructor() {}

  ngOnInit(): void {}
}
