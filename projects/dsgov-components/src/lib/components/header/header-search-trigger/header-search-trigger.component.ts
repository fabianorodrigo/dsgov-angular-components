import { BaseComponent } from './../../base/base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-header-search-trigger',
  templateUrl: './header-search-trigger.component.html',
})
export class HeaderSearchTriggerComponent
  extends BaseComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
