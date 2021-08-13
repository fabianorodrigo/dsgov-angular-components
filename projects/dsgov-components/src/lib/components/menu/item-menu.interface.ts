import { EventEmitter } from '@angular/core';
import { RegraExibicaoMenuEnum } from './regra-exibicao-menu.enum';

export interface ItemMenu {
  exibicao: RegraExibicaoMenuEnum;
  classIconeFontAwesome?: string;
  texto?: string;
  rota?: string;
  click?: EventEmitter<any>;
}
