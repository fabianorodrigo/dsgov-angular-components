import { Funcionalidade } from './../../base/funcionalidade.interface';
import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit } from '@angular/core';
import { Link, TipoLink } from '../../base';

@Component({
  selector: 'br-header-functions',
  templateUrl: './header-functions.component.html',
})
export class HeaderFunctionsComponent extends BaseComponent {
  //constantes usadas no template
  readonly TIPOLINK_ROTA = TipoLink.ROTA;
  readonly TIPOLINK_URL = TipoLink.URL;

  @Input() funcionalidades: Funcionalidade[] = [];

  constructor() {
    super();
  }
}
