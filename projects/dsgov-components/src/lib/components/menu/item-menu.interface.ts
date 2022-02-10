import { Link } from '../base/link.interface';
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
