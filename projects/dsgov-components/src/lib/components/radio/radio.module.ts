import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioHorizontalComponent } from './radio-horizontal/radio-horizontal.component';

@NgModule({
  declarations: [RadioComponent, RadioHorizontalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RadioComponent, RadioHorizontalComponent],
})
export class RadioModule {}
