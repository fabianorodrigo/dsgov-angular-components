import { ItemModule } from './../item/item.module';
import { DividerModule } from './../divider/divider.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { GrupoFooterComponent } from './grupo-footer/grupo-footer.component';

@NgModule({
  declarations: [FooterComponent, GrupoFooterComponent],
  imports: [CommonModule, DividerModule, ItemModule],
  exports: [FooterComponent],
})
export class FooterModule {}
