import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { BasicaComponent } from './../basica/basica.component';

@Component({
  selector: 'br-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent extends BasicaComponent implements OnInit {

  formulario: FormGroup;
  exibe: boolean = false;
  formSubmetido: boolean = false;
  formEnviado: boolean = false;

  private errorsType: any[] = [
    { id: 'required', mensagem: 'Preenchimento Obrigatório' },
    {
      id: 'minlength',
      mensagem: 'Campo não atende a quantidade mínima de caracteres: ',
    },
    {
      id: 'maxlength',
      mensagem: 'Campo excede a quandidade máxima de caracteres: ',
    },
    { id: 'pattern', mensagem: 'Campo contêm caracteres inválidos' },
    { id: 'email', mensagem: 'Insira um endereço de e-mail válido' },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getMensagemErro(campo: string): string {
    let type = this.errorsType.filter(err => this.formulario.get(campo).errors[err.id])[0];
    let { requiredLength } = this.formulario.get(campo).errors[type.id];
    return `${type.mensagem} ${requiredLength || ''}`;
  }

  getHint(value, array) {
    return array.find(item => item.id === value).hint;
  }

  logaErrosValidacaoForm(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      //Se for um formGroup, chama recursivamente
      if (form.get(key)['controls']) {
        this.logaErrosValidacaoForm(form.get(key) as FormGroup);
      } else {
        const controlErrors: ValidationErrors = form.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      }
    });
  }

  naoValidoOuSubmetido(formulario: FormGroup, campo: string, submitedForm: boolean, apenasNoSubmit: boolean): boolean {
    return (
      (formulario.get(campo).dirty && !apenasNoSubmit) ||
      (formulario.get(campo).touched && !apenasNoSubmit) ||
      submitedForm
    );
  }

  validaFormulario() {
    if (this.formulario.invalid) {
      Object.keys(this.formulario.controls).forEach(campo => {
        this.formulario.get(campo).markAsTouched();
      });
      this.formSubmetido = true;
      this.formEnviado = true;
      return false;
    }

    return true;
  }

  limpaEspacos(item: string): string {
    if (item) {
      return item.trim();
    } else {
      return item;
    }
  }

}
