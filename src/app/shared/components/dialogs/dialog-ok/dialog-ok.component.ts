import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DadosDialog } from '../dados-dialog';

@Component({
  selector: 'app-dialog-ok',
  templateUrl: './dialog-ok.component.html',
  styleUrls: ['./dialog-ok.component.css'],
})
export class DialogOkComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOkComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosDialog: DadosDialog
  ) {}

  ngOnInit(): void {}
}
