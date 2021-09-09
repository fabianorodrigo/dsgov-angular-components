import { TipoItem } from './../tipo-item.enum';
import { BaseComponent } from './../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TipoItemType } from '../tipo-item.enum';

@Component({
  selector: 'br-item',
  templateUrl: './item.component.html',
})
export class ItemComponent extends BaseComponent {
  //constantes usadas no template
  readonly PADRAO = TipoItem.PADRAO;
  readonly LINK = TipoItem.LINK;
  readonly BUTTON = TipoItem.BUTTON;
  readonly SELECTION = TipoItem.SELECTION;

  //Se item do tipo LINK, preenche o HREF da tag A
  @Input() href: string;
  //Se item do tipo LINK, preenche o TARGET da tag A
  @Input() target: string;

  @Input() tipoItem: TipoItemType = this.PADRAO;
  @Input() click: EventEmitter<any>;
  // Aplica separador na borda inferior do Item
  @Input() divider: boolean;

  /*** Os Estados são representados em propriedades específicas ***/

  //se true, aplica a classe 'disabled'
  @Input() isDisabled: boolean = false;
  //se true, aplica a classe 'active'
  @Input() isActive: boolean = false;
  //se true, Aplica estilo selecionado
  @Input() isSelected: boolean = false;

  constructor() {
    super();
  }
}
