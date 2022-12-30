import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinSideNavComponent } from './digital-twin-side-nav.component';

describe('DigitalTwinSideNavComponent', () => {
  let component: DigitalTwinSideNavComponent;
  let fixture: ComponentFixture<DigitalTwinSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwinSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTwinSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
