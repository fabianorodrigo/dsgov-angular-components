import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFunctionsComponent } from './header-functions.component';

describe('HeaderFunctionsComponent', () => {
  let component: HeaderFunctionsComponent;
  let fixture: ComponentFixture<HeaderFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
