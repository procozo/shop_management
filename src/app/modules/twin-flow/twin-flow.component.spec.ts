import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinFlowComponent } from './twin-flow.component';

describe('TwinFlowComponent', () => {
  let component: TwinFlowComponent;
  let fixture: ComponentFixture<TwinFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwinFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
