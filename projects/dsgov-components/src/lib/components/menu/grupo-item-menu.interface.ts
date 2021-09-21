import { ItemMenu } from './item-menu.interface';
import { RegraExibicaoMenuType } from './regra-exibicao-menu.enum';

type FunctionOnClickGrupoItemMenu = (item: GrupoItemMenu) => void;

export interface GrupoItemMenu {
  exibicao: RegraExibicaoMenuType;
  classIconeFontAwesome?: string;
  texto?: string;
  itens: ItemMenu[];
  click?: FunctionOnClickGrupoItemMenu;
}
