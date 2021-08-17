import { ItemMenu } from './item-menu.interface';
import { RegraExibicaoMenuEnum } from './regra-exibicao-menu.enum';

type FunctionOnClickGrupoItemMenu = (item: GrupoItemMenu) => void;

export interface GrupoItemMenu {
  exibicao: RegraExibicaoMenuEnum;
  classIconeFontAwesome?: string;
  texto?: string;
  itens: ItemMenu[];
  click?: FunctionOnClickGrupoItemMenu;
}
