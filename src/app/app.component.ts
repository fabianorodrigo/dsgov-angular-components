import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './shared/core';
import { ItemBreadcrumb, ItemMenu, RegraExibicaoMenuEnum } from 'dsgov-components';

declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //é uma convenção que as variáveis Observable terminem com $
  user$: Observable<User>;
  user: User | undefined;
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
  }

  gOnInit(): void {
    const itemA: ItemMenu = {
      texto: 'teste',
      rota: 'http://lugar',
      exibicao: RegraExibicaoMenuEnum.SEMPRE,
      classIconeFontAwesome: 'fas fa-camera-retro',
    } as ItemMenu;
    this.itensMenu.push(itemA);
  }

  title = '###app.nome###';

  logout() {
    this.userService.logout();
  }
}
