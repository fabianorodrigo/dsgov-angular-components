import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AcaoEnum } from 'src/app/shared/enums';

@Component({
  selector: 'br-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css'],
})
export class BasicaComponent {
  AcaoEnum = AcaoEnum;

  constructor() {}

  @Output() onSucesso = new EventEmitter<string>();
  @Output() onErro = new EventEmitter<string>();

  catchError(e: any) {
    //se o HTTP Status for do tipo 400, exibe a mensagem, se não, propaga
    if (e.status > 399 && e.status < 500) {
      this.onErro.emit(e.error);
      return [];
    }
    throw e;
  }
}
