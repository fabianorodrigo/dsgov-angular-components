import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchTriggerComponent } from './header-search-trigger.component';

describe('HeaderSearchTriggerComponent', () => {
  let component: HeaderSearchTriggerComponent;
  let fixture: ComponentFixture<HeaderSearchTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
