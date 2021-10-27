import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../base/link.interface';
import { Usuario } from '../../base/usuario.interface';
import { BaseComponent } from './../../base/base/base.component';
import { Funcionalidade } from './../../base/funcionalidade.interface';

@Component({
  selector: 'br-header-actions',
  templateUrl: './header-actions.component.html',
})
export class HeaderActionsComponent extends BaseComponent {
  @Input() links: Link[] = [];
  @Input() funcionalidades: Funcionalidade[] = [];
  @Input() usuario: Usuario;

  //Evento de click do botão entrar (login)
  @Output() clickEntrar = new EventEmitter<any>();
  //Evento de click no botão sair
  @Output() clickSair = new EventEmitter<any>();

  constructor() {
    super();
  }

  onClickEntrar(event) {
    this.clickEntrar.emit(event);
  }

  onClickSair(event) {
    this.clickSair.emit(event);
  }
}
