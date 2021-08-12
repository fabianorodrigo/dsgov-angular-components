import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, BaseModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
