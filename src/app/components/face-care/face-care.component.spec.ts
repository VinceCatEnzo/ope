import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCareComponent } from './face-care.component';

describe('FaceCareComponent', () => {
  let component: BodyCareRateComponent;
  let fixture: ComponentFixture<FaceCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
