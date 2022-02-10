import { OpcaoValorLabel } from './../base/opcao-valor-label';
import { EstadoRadioType } from './estado-radio.enum';

export interface OpcaoRadio extends OpcaoValorLabel {
  // Estado do componente input
  estado?: EstadoRadioType;
  //se true, aplica a classe 'disabled' e seta o atributo disable do input
  isDisabled?: boolean;
}
