import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [BaseComponent, ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class BaseModule {}
