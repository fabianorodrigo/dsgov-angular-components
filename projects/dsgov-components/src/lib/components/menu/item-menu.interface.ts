import { Link } from '../base/link.interface';
import { RegraExibicaoMenuType } from './regra-exibicao-menu.enum';

type FunctionOnClickItemMenu = (item: ItemMenu) => void;
export interface ItemMenu {
  id?: string;
  idParents?: string[];
  idChildren?: string[];
  exibicao: RegraExibicaoMenuType;
  //caso a exibicao seja do tipo ROLE, contém o conjunto
  //de roles necessárias ao usuário para que seja exibido
  roles?: string[];
  link: Link;
  click?: FunctionOnClickItemMenu;
  subItens: ItemMenu[];
}
