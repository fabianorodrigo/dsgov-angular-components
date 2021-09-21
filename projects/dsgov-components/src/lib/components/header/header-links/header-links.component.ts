import { Component, Input, OnInit } from '@angular/core';
import { Link, TipoLink } from '../../base';
import { BaseComponent } from './../../base/base/base.component';

@Component({
  selector: 'br-header-links',
  templateUrl: './header-links.component.html',
})
export class HeaderLinksComponent extends BaseComponent {
  //constantes usadas no template
  readonly TIPOLINK_ROTA = TipoLink.ROTA;
  readonly TIPOLINK_URL = TipoLink.URL;

  @Input() links: Link[] = [];

  constructor() {
    super();
  }
}
