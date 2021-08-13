import { InformacaoLicenca } from '../../base/informacao-licenca';
import { BaseComponent } from './../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../base/usuario.interface';
import { ItemMenu } from '../item-menu.interface';
import { RegraExibicaoMenuEnum } from '../regra-exibicao-menu.enum';

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

  // dados do usuario eventualmente ligado
  @Input() usuario: Usuario;
  // evento disparado quando o menu é fechado
  @Output() closeMenu = new EventEmitter<any>();
  // lista de itens de menu
  @Input() itens: ItemMenu[];
  // url da imagem que aparece no menu
  @Input() urlImagem: string = 'assets/govbr-logo-large.png';

  // Indica a exibição ou não da informação sobre licença no menu
  @Input() exibeInformacaoLicenca: boolean = true;
  // Label de apresentação e nome da licença utilizada
  @Input() informacaoLicenca: InformacaoLicenca = new InformacaoLicenca();

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.warn(this.itens);
  }

  onCloseMenu(event) {
    this.closeMenu.emit(event);
  }
}
