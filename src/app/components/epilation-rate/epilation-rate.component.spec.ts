import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilationRateComponent } from './epilation-rate.component';

describe('EpilationRateComponent', () => {
  let component: EpilationRateComponent;
  let fixture: ComponentFixture<EpilationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpilationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpilationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
