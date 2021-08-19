import { RegraExibicaoMenuType } from './regra-exibicao-menu.enum';

type FunctionOnClickItemMenu = (item: ItemMenu) => void;
export interface ItemMenu {
  id?: string;
  idParents?: string[];
  idChildren?: string[];
  exibicao: RegraExibicaoMenuType;
  classIconeFontAwesome?: string;
  texto?: string;
  rota?: string;
  click?: FunctionOnClickItemMenu;
  subItens: ItemMenu[];
}
