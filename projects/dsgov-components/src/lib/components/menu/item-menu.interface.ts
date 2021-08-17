import { RegraExibicaoMenuEnum } from './regra-exibicao-menu.enum';

type FunctionOnClickItemMenu = (item: ItemMenu) => void;
export interface ItemMenu {
  id?: string;
  idParent?: string;
  exibicao: RegraExibicaoMenuEnum;
  classIconeFontAwesome?: string;
  texto?: string;
  rota?: string;
  click?: FunctionOnClickItemMenu;
  subItens: ItemMenu[];
}
