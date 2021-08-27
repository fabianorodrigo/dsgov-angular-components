export type TipoLinkType = 'url' | 'rota';

export class TipoLink {
  /**
   * Rota dentro da própria aplicação tratado pelo Router
   * do Angular (sem recarregar página)
   */
  static readonly ROTA: TipoLinkType = 'rota';
  /**
   * Endereço que não representa uma rota tratada pela aplicação.
   * Tipicamente, um endereço externo
   */
  static readonly URL: TipoLinkType = 'url';
}
