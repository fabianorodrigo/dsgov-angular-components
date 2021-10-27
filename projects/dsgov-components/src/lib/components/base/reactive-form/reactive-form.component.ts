import { BaseComponent } from './../base/base.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, ValidationErrors } from '@angular/forms';
import { ErroForm } from 'projects/dsgov-components/src/public-api';

@Component({
  selector: 'br-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent extends BaseComponent {
  @Input() formulario: FormGroup;
  //Evento de submit
  @Output() submit = new EventEmitter<any>();

  constructor() {
    super();
  }

  /**
   * Captura os erros de cada controle no formulário {form} e seus subformulários
   *
   * @param form Formulário alvo da inspeção
   * @param logConsole Se TRUE, os erros são logados no console do navegador (default: false)
   * @return Array de ErroForm contendo a chave do controle inválido, a chave do erro e valor do erro
   */
  getErrosValidacaoForm(form: FormGroup, logConsole: boolean = false): ErroForm[] {
    let retorno: ErroForm[] = [];
    Object.keys(form.controls).forEach(key => {
      //Se for um formGroup, chama recursivamente
      if (form.get(key)['controls']) {
        retorno = retorno.concat(this.getErrosValidacaoForm(form.get(key) as FormGroup));
      } else {
        const controlErrors: ValidationErrors = form.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            retorno.push({ controle: key, erro: keyError, descricao: controlErrors[keyError] });
            if (logConsole) {
              console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            }
          });
        }
      }
    });
    return retorno;
  }

  onSubmit(event: NgForm) {
    this.submit.emit(event);
  }
}
