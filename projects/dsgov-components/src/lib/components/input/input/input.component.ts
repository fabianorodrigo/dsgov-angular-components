import { Densidade } from './../../base/densidade.enum';
import { EstadoInput, EstadoInputType } from './../estado-input.enum';
import { BaseComponent } from './../../base/base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DensidadeType } from '../../base';

@Component({
  selector: 'br-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends BaseComponent implements OnInit {
  //constantes usadas no template
  readonly ESTADO_DEFAULT = EstadoInput.DEFAULT;
  //ícones feedback
  private iconesEstado = {
    success: 'fas fa-check-circle',
    danger: 'fas fa-times-circle',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle',
  };

  //Evento de click
  @Output() click = new EventEmitter<any>();
  // Evento de mudança de valor
  @Output() change = new EventEmitter<any>();
  // Evento de pressiona tecla
  @Output() keypress = new EventEmitter<any>();
  //Evento de click do botao dentro do input
  @Output() clickButton = new EventEmitter<any>();

  //atributos input HTML
  @Input() type: string = 'text';
  @Input() maxLength: number;
  @Input() min: number | string;
  @Input() max: number | string;
  @Input() pattern: string;
  @Input() placeHolder: string = '';
  @Input() step: number;
  @Input() required: boolean = false;
  //Reactive forms
  @Input() formControlName: string;

  //texto do label
  @Input() textoLabel: string;
  //ícone do botão do botão dentro do input
  @Input() classIconeFontAwesomeBotao: string;
  //Valor da propriedade ariaLabel do botão dentro do input
  @Input() ariaLabelButton: string;
  // texto do feeback, exibido quando o estado do botão está diferente de DEFAULT
  @Input() textoFeedback: string;

  // Estado do componente input
  @Input() estado: EstadoInputType = EstadoInput.DEFAULT;
  //se true, aplica a classe 'disabled'
  @Input() isDisabled: boolean;

  // Densidade dos itens de menu. Default: densidade medium
  @Input() densidade: DensidadeType = Densidade.MEDIA;

  // classes aplicáveis ao <label></label>
  @Input()
  ngClassLabel: string | string[] | Set<string> | { [klass: string]: any } = '';
  // classes aplicáveis ao <input></input>
  @Input()
  ngClassInput: string | string[] | Set<string> | { [klass: string]: any } = '';
  // classes aplicáveis ao <button></button>
  @Input()
  ngClassButton: string | string[] | Set<string> | { [klass: string]: any } =
    '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.textoLabel;
    }
  }

  onClickButton(event) {
    //The mouseEvent propagates from the child component to the parent component by default.
    //You can stop propagation of event to parent component.
    event.stopPropagation();
    this.clickButton.emit(event);
  }
}
