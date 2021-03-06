import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DensidadeType } from '../../base/densidade.enum';
import { base64LogoGovBr } from '../../base/logoGovBr';
import { BaseComponent } from './../../base/base/base.component';
import { Densidade } from './../../base/densidade.enum';
import { TipoSignin, TipoSigninType } from './../tipo-signin.enum';

@Component({
  selector: 'br-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent extends BaseComponent {
  //constantes usadas no template
  readonly ENTRAR = TipoSignin.ENTRAR;
  readonly ENTRAR_GOVBR_MONO = TipoSignin.ENTRAR_GOVBR_MONO;
  readonly ENTRAR_GOVBR_COR = TipoSignin.ENTRAR_GOVBR_COR;
  readonly DENSIDADE_MEDIA = Densidade.MEDIA;

  //Evento de click
  @Output() click = new EventEmitter<any>();
  // tipo de exibição do componente signin
  @Input() tipoSignin: TipoSigninType = TipoSignin.ENTRAR_GOVBR_COR;

  // Densidade dos itens de menu. Default: densidade alta (small)
  @Input() densidade: DensidadeType = Densidade.ALTA;

  constructor(private domSanitizer: DomSanitizer) {
    super();
  }

  onClickBotao(event) {
    this.click.emit(event);
  }

  //logo gov.br
  readonly base64LogoDefault = this.domSanitizer.bypassSecurityTrustUrl(base64LogoGovBr);
}
