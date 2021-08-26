import { ButtonModule } from './../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ButtonModule],
})
export class SigninModule {}
