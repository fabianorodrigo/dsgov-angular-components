import { TipoLinkType } from './tipo-link.enum';
export interface Link {
  classIconeFontAwesome?: string;
  texto?: string;
  url: string;
  tipo: TipoLinkType;
  //Se TRUE, o endereço será aberto em uma nova aba (target="_blank")
  novaAba?: boolean;
}
