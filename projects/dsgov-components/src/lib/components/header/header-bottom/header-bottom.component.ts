import { BaseComponent } from './../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-header-bottom',
  templateUrl: './header-bottom.component.html',
})
export class HeaderBottomComponent extends BaseComponent {
  // texto do Título
  @Input() titulo: string = 'Título';
  // texto do Subtítulo
  @Input() subtitulo: string = 'Subtítulo';
  //texto do label do campo de pesquisa
  @Input() labelPesquisa: string = 'Texto da pesquisa';

  // Evento do clique para abrir o menu
  @Output() clickMenu = new EventEmitter<void>();

  constructor() {
    super();
  }

  onClickMenu(event) {
    this.clickMenu.emit(event);
  }
}
