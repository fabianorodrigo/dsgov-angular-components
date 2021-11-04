import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../../base/base/base.component';
import { Densidade, DensidadeType } from '../../base/densidade.enum';
import { OpcaoRadio } from '../opcao-radio';

@Component({
  selector: 'br-radio-horizontal',
  templateUrl: './radio-horizontal.component.html',
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioHorizontalComponent), //Ao contrário do RadioComponent, só funcionou utilizando esse forwardRef
    },
  ],
})
export class RadioHorizontalComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  valor: any = '';
  @Input() formControlName: string;
  private control: AbstractControl;

  //Evento de click
  @Output() click = new EventEmitter<any>();
  // Evento de mudança de valor
  @Output() change = new EventEmitter<any>();

  @Input() opcoes: OpcaoRadio[];
  @Input() isDisabled: boolean;
  //atributos input HTML
  @Input() required: boolean = false;

  //texto do label externo
  @Input() textoLabel: string;
  // texto abaixo do rótulo
  @Input() textoAdicional: string;

  //se true, input foi alterado
  touched = false;

  // Densidade dos itens de menu. Default: densidade medium
  @Input() densidade: DensidadeType = Densidade.MEDIA;

  // classes aplicáveis ao <label></label> externo
  @Input()
  ngClassLabel: string | string[] | Set<string> | { [klass: string]: any } = '';
  // classes aplicáveis ao <input></input>
  @Input()
  ngClassInput: string | string[] | Set<string> | { [klass: string]: any } = '';
  // classes aplicáveis aos <label></label> de cada opção
  @Input()
  ngClassLabelInterna: string | string[] | Set<string> | { [klass: string]: any } = '';

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer,
  ) {
    super();
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.textoLabel;
    }
    //https://stackoverflow.com/questions/44731894/get-access-to-formcontrol-from-the-custom-form-component-in-angular
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn("Can't find parent FormGroup directive");
    }
  }

  onChangeInput(event: Event) {
    if (!this.isDisabled && (event.target as HTMLInputElement).value) {
      this.valor = (event.target as HTMLInputElement).value;
      this.onChange(this.valor);
    }
  }

  onChange = valor => {};

  onTouched = () => {};

  writeValue(valor: any) {
    this.valor = valor;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }
}
