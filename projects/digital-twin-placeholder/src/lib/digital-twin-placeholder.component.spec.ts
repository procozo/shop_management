import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinPlaceholderComponent } from './digital-twin-placeholder.component';

describe('DigitalTwinPlaceholderComponent', () => {
  let component: DigitalTwinPlaceholderComponent;
  let fixture: ComponentFixture<DigitalTwinPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwinPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTwinPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
