import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../base/base/base.component';
import { Usuario } from '../../base/usuario.interface';
import { GrupoItemMenu } from '../grupo-item-menu.interface';
import { RegraExibicaoMenu } from '../regra-exibicao-menu.enum';

@Component({
  selector: 'br-grupo-menu-expansao',
  templateUrl: './grupo-menu-expansao.component.html',
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
export class GrupoMenuExpansaoComponent extends BaseComponent {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenu.SEMPRE;
  readonly LOGADO = RegraExibicaoMenu.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenu.NAO_LOGADO;
  readonly ROLES_TODAS = RegraExibicaoMenu.ROLES_TODAS;
  readonly ROLES = RegraExibicaoMenu.ROLES;

  @Input() grupo: GrupoItemMenu;
  // dados do usuario eventualmente logado
  @Input() usuario: Usuario;

  //Indica se o grupo de menu está expandido ou colapsado
  @Input() expandido = true;

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

  // o click no grupo inverte a condição de expandido ou não do próprio componente de Grupo e,
  // havendo uma função a ser acionada no click do grupo, também é invocada
  onClickComponent(event) {
    this.expandido = !this.expandido;
    //Se o grupo tiver uma função associada ao atributo 'click', invoca-a
    if (this.grupo.click) {
      this.grupo.click(this.grupo);
    }
  }

  /**
   * @param roles Conjunto de roles das quais ao menos uma é esperada
   * @returns Retorna TRUE se alguma das {roles} consta entre as roles do usuário
   */
  usuarioTemAlgumaRole(roles: string[]) {
    return roles && this.usuario && roles.some(r => this.usuario.roles.includes(r));
  }

  /**
   * @param roles Conjunto de roles das quais é esperado que se tenha todas
   * @returns Retorna TRUE se TODAS as {roles} constam entre as roles do usuário
   */
  usuarioTemTodasRoles(roles: string[]) {
    return roles && this.usuario && roles.every(r => this.usuario.roles.includes(r));
  }
}
