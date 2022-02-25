export type RegraExibicaoMenuType = 'sempre' | 'logado' | 'naoLogado' | 'rolesTodas' | 'roles';

export class RegraExibicaoMenu {
  // Item sempre é exibido
  static readonly SEMPRE: RegraExibicaoMenuType = 'sempre';
  // Exibe sempre que autenticado
  static readonly LOGADO: RegraExibicaoMenuType = 'logado';
  // Exibe apenas quando não autenticado
  static readonly NAO_LOGADO: RegraExibicaoMenuType = 'naoLogado';
  // Exibe apenas se o usuário possuir todas as roles de um determinado conjunto
  static readonly ROLES_TODAS: RegraExibicaoMenuType = 'rolesTodas';
  // Exibe apenas se o usuário possuir alguma das roles de um determinado conjunto
  static readonly ROLES: RegraExibicaoMenuType = 'roles';
}
