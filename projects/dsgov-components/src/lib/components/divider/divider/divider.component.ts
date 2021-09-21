import { OrientacaoDividerType } from './../orientacao-divider.enum';
import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-divider',
  templateUrl: './divider.component.html',
  styles: [],
})
export class DividerComponent extends BaseComponent {
  //Vertical ou horizontal
  orientacao: OrientacaoDividerType = '';

  constructor() {
    super();
  }
}
