import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinCardComponent } from './digital-twin-card.component';

describe('DigitalTwinCardComponent', () => {
  let component: DigitalTwinCardComponent;
  let fixture: ComponentFixture<DigitalTwinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalTwinCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalTwinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
