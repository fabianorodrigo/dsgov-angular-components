import { ItemBreadcrumb } from '../item-breadcrumb.interface';
import { BaseComponent } from './../../base/base/base.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [],
})
export class BreadcrumbComponent extends BaseComponent implements OnInit {
  @Input() labelPaginaInicial = 'Página inicial';
  @Input() linkPaginaInicial = '/';

  @Input() itens: ItemBreadcrumb[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
