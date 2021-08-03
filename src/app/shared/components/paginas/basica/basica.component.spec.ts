import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicaComponent } from './basica.component';

describe('BasicaComponent', () => {
  let component: BasicaComponent;
  let fixture: ComponentFixture<BasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
