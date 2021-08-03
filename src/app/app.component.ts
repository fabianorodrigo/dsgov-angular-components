import { ItemMenu } from './shared/components/menu/itemMenu';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './shared/core';

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

  itensMenu: ItemMenu[] = require('./menu.json');

  constructor(private userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => (this.user = user));
  }

  title = '###app.nome###';

  logout() {
    this.userService.logout();
  }
}
