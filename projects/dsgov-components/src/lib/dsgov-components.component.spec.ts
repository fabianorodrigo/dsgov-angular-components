import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsgovComponentsComponent } from './dsgov-components.component';

describe('DsgovComponentsComponent', () => {
  let component: DsgovComponentsComponent;
  let fixture: ComponentFixture<DsgovComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsgovComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsgovComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
