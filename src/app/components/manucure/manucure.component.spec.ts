import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManucureComponent } from './manucure.component';

describe('ManucureComponent', () => {
  let component: ManucureComponent;
  let fixture: ComponentFixture<ManucureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManucureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManucureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
