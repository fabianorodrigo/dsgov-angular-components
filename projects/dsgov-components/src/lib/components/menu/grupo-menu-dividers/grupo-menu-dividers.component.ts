import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent, Usuario } from '../../base';
import { GrupoItemMenu } from '../grupo-item-menu.interface';
import { RegraExibicaoMenu } from '../regra-exibicao-menu.enum';

@Component({
  selector: 'br-grupo-menu-dividers',
  templateUrl: './grupo-menu-dividers.component.html',
  styles: [
    `div.divisor-menu.menu-folder {
      border-bottom: 1px solid var(--menu-divider);`,
    `
      a {
        text-decoration: none;
        font-weight: normal;
      }
    `,
  ],
})
export class GrupoMenuDividersComponent extends BaseComponent {
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
}
