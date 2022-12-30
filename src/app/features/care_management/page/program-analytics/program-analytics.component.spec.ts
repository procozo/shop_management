import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAnalyticsComponent } from './program-analytics.component';

describe('ProgramAnalyticsComponent', () => {
  let component: ProgramAnalyticsComponent;
  let fixture: ComponentFixture<ProgramAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
