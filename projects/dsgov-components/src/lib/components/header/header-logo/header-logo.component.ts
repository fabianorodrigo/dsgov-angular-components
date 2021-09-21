import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-header-logo',
  templateUrl: './header-logo.component.html',
})
export class HeaderLogoComponent extends BaseComponent {
  // imagem que aparece no cabeçalho (url ou base64)
  @Input() logo: string;
  // texto assinatura (texto ao lado direito da logo)
  @Input() textoAssinatura: string = 'Governo Federal';

  constructor() {
    super();
  }
}
