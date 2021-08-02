import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSimNaoComponent } from './dialog-sim-nao.component';

describe('DialogSimNaoComponent', () => {
  let component: DialogSimNaoComponent;
  let fixture: ComponentFixture<DialogSimNaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSimNaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSimNaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
