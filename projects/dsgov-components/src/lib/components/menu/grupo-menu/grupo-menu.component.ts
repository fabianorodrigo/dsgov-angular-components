import { GrupoItemMenu } from './../grupo-item-menu.interface';
import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { RegraExibicaoMenuEnum } from '../regra-exibicao-menu.enum';
import { Usuario } from '../../base/usuario.interface';

@Component({
  selector: 'br-grupo-menu',
  templateUrl: './grupo-menu.component.html',
  styles: [],
})
export class GrupoMenuComponent extends BaseComponent {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenuEnum.SEMPRE;
  readonly LOGADO = RegraExibicaoMenuEnum.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenuEnum.NAO_LOGADO;

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
}
