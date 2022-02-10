import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../base/usuario.interface';
import { GrupoItemMenu } from '../grupo-item-menu.interface';
import { RegraExibicaoMenu } from '../regra-exibicao-menu.enum';
import { BaseComponent } from './../../base/base/base.component';

@Component({
  selector: 'br-grupo-menu-rotulos',
  templateUrl: './grupo-menu-rotulos.component.html',
  styles: [
    `div.divisor-menu.menu-folder {
    border-bottom: 1px solid var(--menu-divider);`,
    `div.divisor-menu.menu-folder div.menu-item {
    color: black;`,
    `
      a {
        text-decoration: none;
        font-weight: normal;
      }
    `,
  ],
})
export class GrupoMenuRotulosComponent extends BaseComponent {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenu.SEMPRE;
  readonly LOGADO = RegraExibicaoMenu.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenu.NAO_LOGADO;

  @Input() grupo: GrupoItemMenu;
  // dados do usuario eventualmente logado
  @Input() usuario: Usuario;

  // o EventEmitter de fechamento do menu é passado para os grupos a fim de que seja chamado
  // quando um item de menu de rota (sem uma função que trate o click) for clicado
  @Input() closeMenu: EventEmitter<any> = null;

  //ID do side-menu (um menu com subitens de um item) sendo exibido no momento
  @Input() idSideMenuVisivel: string[] = [];

  // evento disparado quando um side menu é exibido ou escondido
  // side-menu é um menu formado por subItens de um item de menu
  @Output() mudancaExibicaoSideMenu = new EventEmitter<string>();

  constructor() {
    super();
  }

  // havendo uma função a ser acionada no click do grupo, também é invocada
  onClickComponent(event) {
    //Se o grupo tiver uma função associada ao atributo 'click', invoca-a
    if (this.grupo.click) {
      this.grupo.click(this.grupo);
    }
  }
}
