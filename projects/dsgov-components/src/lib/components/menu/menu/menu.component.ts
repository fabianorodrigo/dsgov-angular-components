import { base64LogoGovBr } from './../../base/logoGovBr';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent, InformacaoLicenca, Link, Usuario } from '../../base';
import { ItemMenu } from '../item-menu.interface';
import { RegraExibicaoMenu } from '../regra-exibicao-menu.enum';
import {
  TipoAgrupamentoLista,
  TipoAgrupamentoListaType,
} from '../../list/tipo-agrupamento-lista.enum';
import { Densidade, DensidadeType } from './../../base/densidade.enum';
import { GrupoItemMenu } from './../grupo-item-menu.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'br-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .br-menu .menu-header .menu-title img + * {
        margin-left: var(--spacing-scale-base);
      }
    `,
  ],
})
export class MenuComponent extends BaseComponent implements OnInit {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenu.SEMPRE;
  readonly LOGADO = RegraExibicaoMenu.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenu.NAO_LOGADO;
  readonly AGRUPAMENTO_EXPANSAO = TipoAgrupamentoLista.EXPANSAO;
  readonly AGRUPAMENTO_ROTULO = TipoAgrupamentoLista.ROTULO;
  readonly AGRUPAMENTO_DIVIDER = TipoAgrupamentoLista.DIVIDER;

  // Tipo do agrupamento do menu
  @Input() tipoAgrupamentoMenu: TipoAgrupamentoListaType =
    TipoAgrupamentoLista.EXPANSAO;
  // Densidade dos itens de menu. Default: densidade normal
  @Input() densidade: DensidadeType = Densidade.MEDIA;

  // controle endógeno da exibição do menu
  @Input() visivel: boolean = false;

  // dados do usuario eventualmente logado
  @Input() usuario: Usuario;
  // evento disparado quando o menu é fechado
  @Output() closeMenu = new EventEmitter<any>();
  // lista de grupos de itens de menu
  @Input() grupos: GrupoItemMenu[];
  // url da imagem que aparece no menu
  @Input() urlImagem: string;
  // Texto ao lado do logotipo do menu (identificação de site ou sistema)
  @Input() titulo: string;
  //Links externos exibidos no menu, abaixo dos itens
  @Input() linksExternos: Link[] = [];

  // Indica a exibição ou não da informação sobre licença no menu
  @Input() exibeInformacaoLicenca: boolean = true;
  // Label de apresentação e nome da licença utilizada
  @Input() informacaoLicenca: InformacaoLicenca = new InformacaoLicenca();

  // Pilha com IDs de side-menus (um menu com subitens de um item) ativos no momento
  // o ID da ponta da pilha é em exibição no momento. Ao fechar o side-menu, ocorre
  // um POP nesta pilha
  idSideMenuVisivel: string[] = [];

  constructor(private domSanitizer: DomSanitizer) {
    super();
  }

  ngOnInit() {
    // setando ids para os grupos e itens de menu
    // utilizado no controle de exibição/ocultação de side-menus
    this.grupos.forEach((g, i) => {
      this.setIDs([i.toString()], g.itens);
    });
  }

  private setIDs(idParents: string[], itens: ItemMenu[]) {
    itens.forEach((item, i) => {
      item.idParents = idParents;
      item.id = item.idParents[item.idParents.length - 1].concat(
        '_',
        i.toString()
      );
      if (item.subItens != null) {
        this.setIDs(item.idParents.concat(item.id), item.subItens);
        item.idChildren = item.subItens.map((si) => si.id);
      }
    });
  }

  onCloseMenu(event) {
    this.closeMenu.emit(event);
  }

  onMudancaExibicaoSideMenu(id: string) {
    // Se passar null, significa que está saindo de um side menu
    // remove então o último elemento (caso seja uma situação de
    // menus aninhados, voltará para o nível anterior)
    if (id == null) {
      this.idSideMenuVisivel.pop();
    }
    // passando um identificador, acrescenta id do side menu à pilha
    else {
      this.idSideMenuVisivel.push(id);
    }
  }

  //logo gov.br
  readonly base64LogoDefault =
    this.domSanitizer.bypassSecurityTrustUrl(base64LogoGovBr);
}
