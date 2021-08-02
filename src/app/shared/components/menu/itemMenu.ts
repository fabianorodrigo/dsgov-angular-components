export interface ItemMenu {
  icone: string;
  texto: string;
  rota: string;
  exibicao: RegraExibicao;
}

export enum RegraExibicao {
  SEMPRE = 'sempre',
  LOGADO = 'logado',
  NAO_LOGADO = 'naoLogado',
}
