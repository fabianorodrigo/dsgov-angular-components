import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DadosDialog } from '../dados-dialog';

@Component({
  selector: 'br-dialog-sim-nao',
  templateUrl: './dialog-sim-nao.component.html',
  styleUrls: ['./dialog-sim-nao.component.css'],
})
export class DialogSimNaoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSimNaoComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosDialog: DadosDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
