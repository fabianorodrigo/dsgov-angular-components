import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { MenuComponent } from './menu/menu.component';
import { GrupoMenuExpansaoComponent } from './grupo-menu-expansao/grupo-menu-expansao.component';
import { GrupoMenuRotulosComponent } from './grupo-menu-rotulos/grupo-menu-rotulos.component';
import { GrupoMenuDividersComponent } from './grupo-menu-dividers/grupo-menu-dividers.component';

@NgModule({
  declarations: [MenuComponent, ItemMenuComponent, GrupoMenuExpansaoComponent, GrupoMenuRotulosComponent, GrupoMenuDividersComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {}
