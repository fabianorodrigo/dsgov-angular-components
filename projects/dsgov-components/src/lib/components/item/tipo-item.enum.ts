export type TipoItemType = 'padrao' | 'link' | 'button' | 'selection';

export class TipoItem {
  static readonly PADRAO: TipoItemType = 'padrao';
  static readonly LINK: TipoItemType = 'link';
  static readonly BUTTON: TipoItemType = 'button';
  static readonly SELECTION: TipoItemType = 'selection';
}
