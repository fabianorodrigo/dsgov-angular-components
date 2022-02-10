import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../base/base/base.component';
import { Usuario } from '../../base/usuario.interface';

@Component({
  selector: 'br-header-login',
  templateUrl: './header-login.component.html',
  styles: [
    `
      #divBotaoSair {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class HeaderLoginComponent extends BaseComponent {
  constructor() {
    super();
  }

  @Input() usuario: Usuario;

  //Evento de click no botão signin
  @Output() clickEntrar = new EventEmitter<any>();
  //Evento de click no botão sair
  @Output() clickSair = new EventEmitter<any>();

  onClickEntrar(event) {
    this.clickEntrar.emit(event);
  }

  onClickSair(event) {
    this.clickSair.emit(event);
  }
}
