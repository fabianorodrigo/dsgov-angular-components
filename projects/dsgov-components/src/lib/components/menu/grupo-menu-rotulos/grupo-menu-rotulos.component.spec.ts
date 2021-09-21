import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMenuRotulosComponent } from './grupo-menu-rotulos.component';

describe('GrupoMenuRotulosComponent', () => {
  let component: GrupoMenuRotulosComponent;
  let fixture: ComponentFixture<GrupoMenuRotulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoMenuRotulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMenuRotulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
