import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOkComponent } from './dialog-ok.component';

describe('DialogOkComponent', () => {
  let component: DialogOkComponent;
  let fixture: ComponentFixture<DialogOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
