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
  //Exibe ou não a caixa de pesquisa
  @Input() mostraPesquisa: boolean = true;
  //texto do label do campo de pesquisa
  @Input() labelPesquisa: string = 'Texto da pesquisa';

  public textoPesquisa: '';

  // Evento do clique para abrir o menu
  @Output() clickMenu = new EventEmitter<void>();
  //Evento de click na lupa
  @Output() clickProcurar = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onClickProcurar(event) {
    this.clickProcurar.emit(this.textoPesquisa || '');
  }

  onClickMenu(event) {
    this.clickMenu.emit(event);
  }
}
