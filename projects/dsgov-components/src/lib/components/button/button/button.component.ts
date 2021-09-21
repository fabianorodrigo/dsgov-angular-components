import { BaseComponent } from '../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  //Evento de click
  @Output() click = new EventEmitter<any>();

  /*** Os Estados são representados em propriedades específicas ***/

  //se true, aplica a classe 'disabled' ao botão
  @Input() isDisabled: boolean;
  //se true, aplica a classe 'active' ao botão
  @Input() isActive: boolean;
  //se true, aplica a classe 'loading' ao botão
  @Input() isLoading: boolean;

  ngOnInit(): void {}

  onClickComponent(event) {
    this.click.emit(event);
  }
}
