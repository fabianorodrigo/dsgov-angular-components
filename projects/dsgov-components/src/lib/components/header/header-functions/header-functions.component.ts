import { Component, Input } from '@angular/core';
import { TipoLink } from '../../base/tipo-link.enum';
import { BaseComponent } from './../../base/base/base.component';
import { Funcionalidade } from './../../base/funcionalidade.interface';

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
