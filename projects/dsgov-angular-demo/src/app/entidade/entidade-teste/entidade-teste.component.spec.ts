import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeTesteComponent } from './entidade-teste.component';

describe('EntidadeTesteComponent', () => {
  let component: EntidadeTesteComponent;
  let fixture: ComponentFixture<EntidadeTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadeTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
