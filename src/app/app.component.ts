import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './shared/core';
import { ItemBreadcrumb, ItemMenu, RegraExibicaoMenuEnum } from 'dsgov-components';
import { Usuario } from 'dsgov-components/lib/components/base/usuario.interface';

declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //é uma convenção que as variáveis Observable terminem com $
  user$: Observable<Usuario>;
  user: Usuario;
  menuVisivel: boolean = false;

  itensMenu: ItemMenu[] = [];
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
    const logout: ItemMenu = {
      texto: 'Sair',
      exibicao: RegraExibicaoMenuEnum.LOGADO,
      classIconeFontAwesome: 'fas fa-door-open',
      click: this.logout.bind(this),
    } as ItemMenu;
    this.itensMenu.push(logout);
    //definindo Usuario
    this.user = { jti: 'testonildo', exp: new Date().getTime(), groups: [], upn: 'xxx' };
  }

  title = '###app.nome###';

  fechaMenu() {
    this.menuVisivel = false;
    console.warn(this.menuVisivel);
  }

  logout() {
    this.fechaMenu();
    this.user = null;
    this.userService.logout();
  }
}
