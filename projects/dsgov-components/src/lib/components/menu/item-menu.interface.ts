import { Link } from '../base';
import { RegraExibicaoMenuType } from './regra-exibicao-menu.enum';

type FunctionOnClickItemMenu = (item: ItemMenu) => void;
export interface ItemMenu {
  id?: string;
  idParents?: string[];
  idChildren?: string[];
  exibicao: RegraExibicaoMenuType;
  link: Link;
  click?: FunctionOnClickItemMenu;
  subItens: ItemMenu[];
}
