import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  constructor() {}

  //Evento de click
  @Output() click = new EventEmitter<any>();

  onClickComponent(event) {
    this.click.emit(event);
  }
}
