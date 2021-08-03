import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeListaComponent } from './entidade-lista.component';

describe('EntidadeListaComponent', () => {
  let component: EntidadeListaComponent;
  let fixture: ComponentFixture<EntidadeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
