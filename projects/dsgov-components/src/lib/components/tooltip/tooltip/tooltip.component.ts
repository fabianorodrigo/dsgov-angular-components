import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base/base.component';
import { EstadoTooltipType, EstadoTooltip } from './../estado-tooltip.enum';
import { PosicaoTooltipType, PosicaoTooltip } from './../posicao-tooltip.enum';
import { BRTooltip } from './BRTooltip';

@Component({
  selector: 'br-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent extends BaseComponent implements AfterViewInit {
  @Input() texto: string;
  @Input() subtexto: string;
  @Input() posicao: PosicaoTooltipType = PosicaoTooltip.TOP;
  @Input() estado: EstadoTooltipType = EstadoTooltip.INFO;

  // classe BRTooltip disponibilizada no gov.br/ds responsável pelo comportamento do tooltip e seus subelementos
  private tooltipDS: BRTooltip;

  constructor(private component: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    //quando estava instanciando BRTooltip no ngOnInit, o código no construtor que tentava
    //obter "component.getAttribute('xpto')" estava sempre retornando null. No ngAfterViewInit,
    //funcionou de acordo
    this.tooltipDS = new BRTooltip('br-tooltip', this.component.nativeElement);
  }
}
