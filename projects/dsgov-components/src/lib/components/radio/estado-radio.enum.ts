export type EstadoRadioType = '' | 'valid' | 'invalid';

export class EstadoRadio {
  static readonly DEFAULT: EstadoRadioType = '';
  static readonly VALIDO: EstadoRadioType = 'valid';
  static readonly INVALIDO: EstadoRadioType = 'invalid';
}
