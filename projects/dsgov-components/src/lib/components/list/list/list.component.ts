import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  TipoAgrupamentoLista,
  TipoAgrupamentoListaType,
} from '../tipo-agrupamento-lista.enum';
import { DensidadeType } from '../../base';

@Component({
  selector: 'br-list',
  templateUrl: './list.component.html',
})
export class ListComponent extends BaseComponent implements OnInit {
  //
  @Input() horizontal: boolean;
  //Se TRUE, os itens da lista tem função de colapsar (apenas header da lista fica visível)
  @Input() isColapsavel: boolean = false;
  //Indica se a lista está expandido ou colapsado (apenas se isColapsavel)
  @Input() isExpandida = true;

  //título do header da lista
  @Input() tituloHeader: string;

  // Tipo do agrupamento do menu
  @Input() tipoAgrupamento: TipoAgrupamentoListaType =
    TipoAgrupamentoLista.EXPANSAO;
  // Densidade dos itens de menu. Default: densidade normal
  @Input() densidade: DensidadeType = 'normal';

  /*** As demais características de aparência do componente
       são informadas via atributo "ngClass".
       Quando colapsavel: aplica-se a div que rodeia o cabeçalho da lista (dentro da div br-list).
                          Caso nada seja informado, essa div terá como class 'col'
       Quando não colapsavel: aplica-se a div mais externa do componente (a própria div br-list) ***/
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any };

  //evento de expandir lista
  @Output() expandir: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super();
  }

  ngOnInit(): void {}

  // o click no grupo inverte a condição de expandido ou não do próprio componente de Grupo
  onClickComponent(event) {
    if (this.isColapsavel) {
      this.isExpandida = !this.isExpandida;
      this.expandir.emit(this.isExpandida);
    }
  }
}
