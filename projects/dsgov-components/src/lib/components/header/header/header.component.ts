import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Funcionalidade } from '../../base/funcionalidade.interface';
import { Link } from '../../base/link.interface';
import { base64LogoGovBr } from '../../base/logoGovBr';
import { Usuario } from '../../base/usuario.interface';
import { BaseComponent } from './../../base/base/base.component';
import { TamanhoHeader, TamanhoHeaderType } from './../tamanho-header.enum';
import { BRHeader } from './BRHeader';

@Component({
  selector: 'br-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent implements OnInit {
  // url da imagem que aparece no cabeçalho
  @Input() urlImagem: string;
  // texto assinatura (texto ao lado direito da logo)
  @Input() textoAssinatura: string = 'Governo Federal';
  // texto do Título
  @Input() titulo: string = 'Título';
  // texto do Subtítulo
  @Input() subtitulo: string = 'Subtítulo';
  //texto do label do campo de pesquisa
  @Input() labelPesquisa: string = 'Texto da pesquisa';
  // links do cabeçalho
  @Input() links: Link[] = [];
  // menu de funcionalidades do cabeçalho
  @Input() funcionalidades: Funcionalidade[] = [];
  // tamanho do header
  @Input() tamanhoHeader: TamanhoHeaderType = TamanhoHeader.DEFAULT;
  //usuário logado na aplicação
  @Input() usuario: Usuario;

  // Evento do clique para abrir o menu
  @Output() clickMenu = new EventEmitter<void>();
  //Evento de click do botão entrar (login)
  @Output() clickEntrar = new EventEmitter<any>();
  //Evento de click no botão sair
  @Output() clickSair = new EventEmitter<any>();

  // classe BRHeader disponibilizada no gov.br/ds responsável pelo comportamento do header e seus subelementos
  private headerDS: BRHeader;

  constructor(private component: ElementRef, private domSanitizer: DomSanitizer) {
    super();
  }

  ngOnInit(): void {
    this.headerDS = new BRHeader('br-header', this.component.nativeElement);
  }

  onClickMenu(event) {
    this.clickMenu.emit(event);
  }

  onClickEntrar(event) {
    this.clickEntrar.emit(event);
  }
  onClickSair(event) {
    this.clickSair.emit(event);
  }

  //logo gov.br
  readonly base64LogoDefault = this.domSanitizer.bypassSecurityTrustUrl(base64LogoGovBr);
}
