import { TipoLink } from './../../base/tipo-link.enum';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  RegraExibicaoMenu,
  RegraExibicaoMenuType,
} from '../regra-exibicao-menu.enum';
import { BaseComponent } from './../../base/base/base.component';
import { ItemMenu } from './../item-menu.interface';

@Component({
  selector: 'br-item-menu',
  templateUrl: './item-menu.component.html',
  styles: [
    `
      a {
        text-decoration: none;
        font-weight: normal;
      }
    `,
  ],
})
export class ItemMenuComponent extends BaseComponent {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenu.SEMPRE;
  readonly LOGADO = RegraExibicaoMenu.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenu.NAO_LOGADO;

  readonly TIPOLINK_ROTA = TipoLink.ROTA;
  readonly TIPOLINK_URL = TipoLink.URL;

  @Input() item: ItemMenu;

  //ID do side-menu (um menu com subitens de um item) sendo exibido no momento
  @Input() idSideMenuVisivel: string[] = [];

  // o EventEmitter de fechamento do menu é passado para os grupos e depois para os itens
  // de menu a fim de que seja chamado quando um item de menu de rota (sem uma função que
  // trate o click) for clicado
  @Input() closeMenu: EventEmitter<any> = null;

  // evento disparado quando um side menu é exibido ou escondido
  // side-menu é um menu formado por subItens de um item de menu
  @Input() mudancaExibicaoSideMenu: EventEmitter<string> = null;

  // se o item tiver subitens, essa propriedade determina se os subitens estão expandidos
  // ou colapsados
  @Input() expandido = false;

  constructor() {
    super();
  }

  // SE TIVER SUBITENS: o click no elemento inverte a condição de expandido ou não do próprio componente
  // SEM SUBITENS, COM CLICK SETADO: invoca a função associada ao click passando o próprio item como argumento
  // SEM SUBITENS NEM CLICK SETADO: Chama 'emit' do EventEmitter recebido em 'closeMenu'
  onClickComponent(event) {
    if (this.item.subItens && this.item.subItens.length > 0) {
      this.expandido = !this.expandido;
      this.mudancaExibicaoSideMenu.emit(this.expandido ? this.item.id : null);
    }
    //Se tiver uma função associada ao atributo 'click', invoca-a
    else if (this.item.click) {
      this.item.click(this.item);
    } else if (this.closeMenu != null) {
      this.closeMenu.emit(event);
    }
  }
}
