export interface Usuario {
  //The jti (JWT ID) claim provides a unique identifier for the JWT.
  //The identifier value MUST be assigned in a manner that ensures
  //that there is a negligible probability that the same value will be
  // accidentally assigned to a different data object.
  //The jti claim can be used to prevent the JWT from being replayed.
  jti: string;
  // Upn: User Principal Name. É o nome de entrada do usuário
  //e.g. name@yourdomain.com OU jose.silva
  upn: string;
  groups: string[];
  exp: number;
  nomeCompleto?: string;
  email?: string;
  imgAvatar?: any;
}
