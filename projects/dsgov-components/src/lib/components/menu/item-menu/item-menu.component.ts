import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from './../../base/base/base.component';
import { ItemMenu } from './../item-menu.interface';

@Component({
  selector: 'br-item-menu',
  templateUrl: './item-menu.component.html',
  styles: [],
})
export class ItemMenuComponent extends BaseComponent implements OnInit {
  @Input() item: ItemMenu;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
