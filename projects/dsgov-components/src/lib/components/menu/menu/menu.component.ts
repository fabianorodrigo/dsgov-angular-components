import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  BaseComponent,
  InformacaoLicenca,
  LinkExternoMenu,
  Usuario,
} from '../../base';
import { ItemMenu } from '../item-menu.interface';
import { RegraExibicaoMenu } from '../regra-exibicao-menu.enum';
import {
  TipoAgrupamentoLista,
  TipoAgrupamentoListaType,
} from '../../list/tipo-agrupamento-lista.enum';
import { DensidadeType } from './../../base/densidade.enum';
import { GrupoItemMenu } from './../grupo-item-menu.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'br-menu',
  templateUrl: './menu.component.html',
  styles: [],
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
  @Input() densidade: DensidadeType = 'normal';

  // dados do usuario eventualmente logado
  @Input() usuario: Usuario;
  // evento disparado quando o menu é fechado
  @Output() closeMenu = new EventEmitter<any>();
  // lista de grupos de itens de menu
  @Input() grupos: GrupoItemMenu[];
  // url da imagem que aparece no menu
  @Input() urlImagem: string;
  //Links externos exibidos no menu, abaixo dos itens
  @Input() linksExternos: LinkExternoMenu[] = [];

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

  //gov.br negativo
  readonly base64LogoDefault = this.domSanitizer.bypassSecurityTrustUrl(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAoCAMAAADHRlSGAAAAeFBMVEUAAAD5vRAoZK0oZK4odpQnY676vRD6vRAxd5IoZK8oY65GrUQnY64nZqolZa8oY677vRAmY6//vxBErUP6vRBFrUNFrUQnZK75vBBFrEP8vBD6vxBFrENFqkYnY676vRAoYq3/vxBErURGrEO7tyIoZK76vRBGrUS/9hXBAAAAJXRSTlMAwYDAEPDw1iBAoH/QcDDgf1AQZ2TawLCqmEUw8LCQkGAgOFCUOz6uWgAAAthJREFUWMPtltt2qjAQQIeEewUFsQh47wn9/z88NZkLINaX6pP7yWjIdiYzs4A/wjgUPODte/vevlvyJEnyV/l8tbS7lycA0O5JcLTHqL/irbrr8sOxBuRCa/HFmb4elRZ2Q7WyXD95Yd9H8EMRGGLhj3yrqBeiFmD/7fDRh+sP8Sk+TF83ee5ZKO1J1ncyA5a++Dq0MdvyC30U4M4tY/alRghi8eFRHkAcmCE1+7qwnxKVKGicDvWffH94FmeLfFXPvtrMAiXrhsLGGXbO13C0ZhZFvpB9Mf+YZlkaiG/b49aqLdsjCf9hQi/Wt+HbHGRR6yUvfG9yI5DRNtsN8YJ2dqTrXJ3SEhUfdrckV/41/JDRKvNE1Z7hfIZ61DlymxRRBY7jOMAN/LB2n7/QxzoRavTJORQQVTgVWITxAHKmvznoiL3cpZkcQyn1OJEIlRIuuTv4gokQv/jkGvEHtUrxAHKY+OytzG1Mxr4V+zz0YRL33A2XuXmmxr4Q7sVXPPBF/o6y2OBNPvRJmiTRtE4f5RMaCmtDiRVfzfm859P4wwlHdzCul+imXiiNzQVn2dAXALK451M8OO2yNpN+aHHfiusa49qs8R4t3HDjKtA3vpznQuFDoQ3R8cgEABmmYclTDNNZ1DoTX5DYLFF4B/FJ5LOAR8IKoKzCQf3E38JOuWqTB9MiOQS0iG99yR3fGRWMRLsR3x7TaGap4cYnpTR+kkamIMN0LT7cntJ9mSGBP/FJC8j8Yx+04TS6DouYdRvMjqL8BUNdDrM+SJZUpAXEg/4vt0NjKL2/J18DC3cy/ct8IboCJj4hV6mu1XVDMZpvZYXKaFuBcPlEYogX9mTOip/hu5eyDXb0LEe4h6abFs5tCb8Q5zfvlirJf3sAhBP37fMwacEvogbJ4XnY+0qVOkg1a3gW8w2fAPMK3wGEF/gUPJN8ORl6OTyZ+KS0Duyrqjr58Ez+A7sTAiW6Xr/YAAAAAElFTkSuQmCC'
  );
}
