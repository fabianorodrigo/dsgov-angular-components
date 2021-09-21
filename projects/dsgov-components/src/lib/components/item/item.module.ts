import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule],
  exports: [ItemComponent],
})
export class ItemModule {}
