import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent, ItemMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {}
