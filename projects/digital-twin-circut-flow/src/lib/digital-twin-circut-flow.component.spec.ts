import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinCircutFlowComponent } from './digital-twin-circut-flow.component';

describe('DigitalTwinCircutFlowComponent', () => {
  let component: DigitalTwinCircutFlowComponent;
  let fixture: ComponentFixture<DigitalTwinCircutFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwinCircutFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTwinCircutFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
