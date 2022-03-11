import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeComponent } from './entidade.component';

describe('EntidadeComponent', () => {
  let component: EntidadeComponent;
  let fixture: ComponentFixture<EntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
