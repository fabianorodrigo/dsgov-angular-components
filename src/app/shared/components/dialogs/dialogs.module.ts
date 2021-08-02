import { MaterialModule } from '../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSimNaoComponent } from './dialog-sim-nao/dialog-sim-nao.component';
import { DialogOkComponent } from './dialog-ok/dialog-ok.component';

@NgModule({
  declarations: [DialogSimNaoComponent, DialogOkComponent],
  imports: [CommonModule, MaterialModule],
})
export class DialogsModule {}
