import { ItemMenu, RegraExibicao } from './itemMenu';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/core/user/user';

@Component({
  selector: 'br-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() user: User;
  @Output() onCloseMenu = new EventEmitter<void>();
  @Input() itens: ItemMenu[] = [];

  SEMPRE = RegraExibicao.SEMPRE;
  LOGADO = RegraExibicao.LOGADO;
  NAO_LOGADO = RegraExibicao.NAO_LOGADO;

  logout() {
    alert('emitir evento');
  }
}
