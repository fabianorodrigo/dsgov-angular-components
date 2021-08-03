import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComponent } from './tabela.component';

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
