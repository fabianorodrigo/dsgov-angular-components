import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFooterComponent } from './grupo-footer.component';

describe('GrupoFooterComponent', () => {
  let component: GrupoFooterComponent;
  let fixture: ComponentFixture<GrupoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
