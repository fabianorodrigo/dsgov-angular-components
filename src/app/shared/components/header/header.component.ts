import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var require: any;

@Component({
  selector: 'br-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() logado: boolean;
  @Output() onOpenMenu = new EventEmitter<void>();

  versao: string = require('../../../../../package.json').version;

  ngOnInit(): void {}
}
