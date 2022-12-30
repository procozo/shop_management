import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegatoTimlineComponent } from './legato-timline.component';

describe('LegatoTimlineComponent', () => {
  let component: LegatoTimlineComponent;
  let fixture: ComponentFixture<LegatoTimlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegatoTimlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegatoTimlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
