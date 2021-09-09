import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-base',
  template: '',
  styles: [],
})
export class BaseComponent {
  @Input() id: string;
  /*** Classes aplicáveis ao componente (setadas em sua declaração no template do componente/página onde é utilizado) ***/
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any } = '';

  constructor() {}

  /**
   * Recebe um {ngClass}, que pode ser uma string, array ou set de strings, e uma sequência de
   * parâmetros do tipo string. Filtra os nulos e realizada uma concatenação separada por espaços.
   * Utilizada para aplicar coleção de classes CSS em determinado elemento HTML
   *
   * @param ngClass string, array ou set de strings com classes CSS
   * @param classesCSS sequência de nomes de classes CSS
   * @returns classes CSS aplicáveis separadas por espaço
   */
  jc(
    ngClass: string | string[] | Set<string> | { [klass: string]: any },
    ...classesCSS: string[]
  ): string {
    return (
      classesCSS.filter((classe) => classe != null).join(' ') +
      (ngClass ? ' ' + ngClass : '')
    );
  }
}
