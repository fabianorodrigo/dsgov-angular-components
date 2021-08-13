import { BaseComponent } from '../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  /*** Os Estados são representados em propriedades específicas ***/

  //se true, aplica a classe 'disabled' ao botão
  @Input() isDisabled: boolean;
  //se true, aplica a classe 'active' ao botão
  @Input() isActive: boolean;
  //se true, aplica a classe 'loading' ao botão
  @Input() isLoading: boolean;

  /*** As demais características de aparência do componente, por exemplo:
      'block', 'circle', 'inverted', 'small', 'primary', 'secondary' etc,
       são informadas via atributo "ngClass" ***/
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any };

  ngOnInit(): void {}
}
