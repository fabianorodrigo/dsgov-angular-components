export type TamanhoHeaderType = '' | 'large' | 'small' | 'compact';

export class TamanhoHeader {
  static readonly DEFAULT: TamanhoHeaderType = '';
  static readonly LARGE: TamanhoHeaderType = 'large';
  static readonly SMALL: TamanhoHeaderType = 'small';
  static readonly COMPACT: TamanhoHeaderType = 'compact';
}
