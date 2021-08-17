import { ItemMenu } from '../item-menu.interface';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BaseComponent, InformacaoLicenca, Usuario } from '../../base';
import { RegraExibicaoMenuEnum } from '../regra-exibicao-menu.enum';
import { GrupoItemMenu } from './../grupo-item-menu.interface';

@Component({
  selector: 'br-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent extends BaseComponent implements OnInit {
  //constantes usadas no template
  readonly SEMPRE = RegraExibicaoMenuEnum.SEMPRE;
  readonly LOGADO = RegraExibicaoMenuEnum.LOGADO;
  readonly NAO_LOGADO = RegraExibicaoMenuEnum.NAO_LOGADO;

  // dados do usuario eventualmente logado
  @Input() usuario: Usuario;
  // evento disparado quando o menu é fechado
  @Output() closeMenu = new EventEmitter<any>();
  // lista de grupos de itens de menu
  @Input() grupos: GrupoItemMenu[];
  // url da imagem que aparece no menu
  @Input() urlImagem: string = 'assets/govbr-logo-large.png';

  // Indica a exibição ou não da informação sobre licença no menu
  @Input() exibeInformacaoLicenca: boolean = true;
  // Label de apresentação e nome da licença utilizada
  @Input() informacaoLicenca: InformacaoLicenca = new InformacaoLicenca();

  //ID do side-menu (um menu com subitens de um item) sendo exibido no momento
  @Input() idSideMenuVisivel: string = null;

  constructor() {
    super();
  }

  ngOnInit() {
    // setando ids para os grupos e itens de menu
    // utilizado no controle de exibição/ocultação de side-menus
    this.grupos.forEach((g, i) => {
      this.setIDs(i.toString(), g.itens);
    });
  }

  private setIDs(idParent: string, itens: ItemMenu[]) {
    itens.forEach((item, i) => {
      item.idParent = idParent.toString();
      item.id = item.idParent.concat('_', i.toString());
      if (item.subItens != null) {
        this.setIDs(item.id, item.subItens);
      }
    });
  }

  onCloseMenu(event) {
    this.closeMenu.emit(event);
  }

  onMudancaExibicaoSideMenu(id: string) {
    this.idSideMenuVisivel = id;
  }
}
