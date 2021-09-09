import { BaseComponent } from './../../base/base/base.component';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Link } from '../../base';

@Component({
  selector: 'br-grupo-footer',
  templateUrl: './grupo-footer.component.html',
  styles: [
    `
      a {
        text-decoration: none;
      }
    `,
  ],
})
export class GrupoFooterComponent extends BaseComponent implements OnInit {
  @Input() horizontal: boolean;
  @Input() grupo: string;

  @Input() links: Link[] = [];

  //Indica se o grupo de menu está expandido ou colapsado
  @Input() expandido = true;

  private windowWidth: number;

  constructor() {
    super();
  }
  ngOnInit(): void {
    //pegando tamanho da tela/janela
    this.windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  }

  /**
   * Atualiza o atributo do tamanho da janela ao redimensionar a janela
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  // o click no grupo inverte a condição de expandido ou não do próprio componente de Grupo
  onClickComponent(event) {
    // aplica-se apenas para telas menores que 992 pois, no CSS, o ícone
    // de seta é exibido apenas em telas menores que isto:
    /*
    .br-footer .br-list.horizontal .br-item .support:last-child {
      display: none;
      pointer-events: none;
    }
    */
    if (this.windowWidth < 992) {
      this.expandido = !this.expandido;
    }
  }
}
