import { FormGroup, ValidationErrors } from '@angular/forms';
import { ErroForm } from '../erroForm.interface';

export abstract class BaseFormComponent {
  abstract iniciarForm();

  exibe: boolean = false;
  formSubmetido: boolean = false;
  formEnviado: boolean = false;
  first: number = 0;
  rows: number = 10;

  dataBr = {
    firstDayOfWeek: 1,
    dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar',
  };

  private errorsType: any[] = [
    { id: 'required', mensagem: 'Preenchimento obrigatório' },
    {
      id: 'minlength',
      mensagem: 'Campo não atende a quantidade mínima de caracteres: ',
    },
    {
      id: 'maxlength',
      mensagem: 'Campo excede a quandidade máxima de caracteres: ',
    },
    { id: 'pattern', mensagem: 'Campo contém caracteres inválidos' },
    { id: 'email', mensagem: 'Insira um endereço de e-mail válido' },
  ];

  getMensagemErro(formulario: FormGroup, campo: string) {
    let type = this.errorsType.filter(err => formulario.get(campo).errors[err.id])[0];
    let { requiredLength } = formulario.get(campo).errors[type.id];
    return `${type.mensagem} ${requiredLength || ''}`;
  }

  getHint(value, array) {
    return array.find(item => item.id === value).hint;
  }

  public getErro(formulario: FormGroup, campo: string) {
    if ((this.formSubmetido || formulario.get(campo).dirty) && formulario.get(campo).errors) {
      return this.errorsType.some(err => formulario.get(campo).errors[err.id]);
    }
    return;
  }

  naoValidoOuSubmetido(formulario: FormGroup, campo: string, submitedForm: boolean, apenasNoSubmit: boolean): boolean {
    return (
      (formulario.get(campo).dirty && !apenasNoSubmit) ||
      (formulario.get(campo).touched && !apenasNoSubmit) ||
      submitedForm
    );
  }

  validarFormulario(formulario: FormGroup) {
    if (formulario.invalid) {
      Object.keys(formulario.controls).forEach(campo => {
        formulario.get(campo).markAsTouched();
      });
      this.formSubmetido = true;
      this.formEnviado = true;
      return false;
    }

    return true;
  }

  limparEspacos(item: string): string {
    if (item) {
      return item.trim();
    } else {
      return item;
    }
  }

  fecharModal() {
    this.formSubmetido = false;
    this.formEnviado = false;
    this.exibe = false;
    this.iniciarForm();
  }

  dataBrFormat(data) {
    if (!data) return null;

    if (data instanceof Date) data = this.dataString(data);

    if (data.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) return data;

    let d = data.split('-');
    return `${d[2]}/${d[1]}/${d[0]}`;
  }

  dataString(data: Date) {
    if (!data) {
      return '';
    }
    let mes = String(data.getMonth() + 1).length > 1 ? `${data.getMonth() + 1}` : `0${data.getMonth() + 1}`;
    let dia = String(data.getDate()).length > 1 ? `${data.getDate()}` : `0${data.getDate()}`;
    return `${data.getFullYear()}-${mes}-${dia}`;
  }

  formatarMilhares(valor) {
    return Number.parseInt(valor) ? Number(valor).toLocaleString('pt-BR') : valor;
  }

  arrayToString(array, prop = null) {
    if (!prop) return array.join(',');
    return array.map(a => a[prop]).join(',');
  }

  nextPage() {
    this.first = this.first + this.rows;
  }

  prevPage() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(obj): boolean {
    return this.first === obj.length - this.rows;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  /**
   * Captura os erros de cada controle no formulário {form} e seus subformulários
   *
   * @param formulario Formulário alvo da inspeção
   * @param logConsole Se TRUE, os erros são logados no console do navegador (default: false)
   * @return Array de ErroForm contendo a chave do controle inválido, a chave do erro e valor do erro
   */
  getErrosValidacaoForm(formulario: FormGroup, logConsole: boolean = false): ErroForm[] {
    let retorno: ErroForm[] = [];
    Object.keys(formulario.controls).forEach(key => {
      //Se for um formGroup, chama recursivamente
      if (formulario.get(key)['controls']) {
        retorno = retorno.concat(this.getErrosValidacaoForm(formulario.get(key) as FormGroup));
      } else {
        const controlErrors: ValidationErrors = formulario.get(key).errors;
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
}
