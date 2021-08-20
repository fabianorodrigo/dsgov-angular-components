import { Component } from '@angular/core';
import { ItemBreadcrumb, RegraExibicaoMenu, TipoAgrupamentoMenu } from 'dsgov-components';
import { Usuario } from 'dsgov-components/lib/components/base/usuario.interface';
import { GrupoItemMenu } from 'dsgov-components/lib/components/menu/grupo-item-menu.interface';
import { Observable } from 'rxjs';
import { UserService } from './shared/core';

declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Constantes utilizadas no template
  readonly AGRUPAMENTO_EXPANSAO = TipoAgrupamentoMenu.EXPANSAO;
  readonly AGRUPAMENTO_ROTULO = TipoAgrupamentoMenu.ROTULO;
  readonly AGRUPAMENTO_DIVIDER = TipoAgrupamentoMenu.DIVIDER;

  //é uma convenção que as variáveis Observable terminem com $
  user$: Observable<Usuario>;
  user: Usuario;
  menuVisivel: boolean = false;

  itensMenu: GrupoItemMenu[] = [];
  itensBreadcrumb: ItemBreadcrumb[] = [
    { label: 'Página Ancestral 01', link: 'http://ancestral01' },
    { label: 'Página Ancestral 02', link: 'http://ancestral02' },
    { label: 'Página atual', link: 'http://paginatual' },
  ];

  constructor(private userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => (this.user = user));
    (require('./menu.json') as []).forEach(item => {
      this.itensMenu.push(item);
    });
    //menu logout
    const logout: GrupoItemMenu = {
      texto: 'Sair',
      exibicao: RegraExibicaoMenu.LOGADO,
      classIconeFontAwesome: 'fas fa-door-open',
      click: this.logout.bind(this),
      itens: [],
    };
    this.itensMenu.push(logout);
    //definindo Usuario
    this.user = { jti: 'testonildo', exp: new Date().getTime(), groups: [], upn: 'xxx' };
  }

  title = '###app.nome###';

  fechaMenu() {
    console.warn('menuVisivel', this.menuVisivel);
    this.menuVisivel = false;
    console.warn('menuVisivel', this.menuVisivel);
  }

  logout() {
    this.fechaMenu();
    this.user = null;
    this.userService.logout();
  }
}
