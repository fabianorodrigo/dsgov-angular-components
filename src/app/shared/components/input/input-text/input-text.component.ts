import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'br-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() value: string = '';
  @Output() onKeyUp = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
