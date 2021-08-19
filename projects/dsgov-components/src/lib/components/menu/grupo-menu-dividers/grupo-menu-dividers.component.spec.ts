import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMenuDividersComponent } from './grupo-menu-dividers.component';

describe('GrupoMenuDividersComponent', () => {
  let component: GrupoMenuDividersComponent;
  let fixture: ComponentFixture<GrupoMenuDividersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoMenuDividersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMenuDividersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
