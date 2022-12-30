import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionNestedComponent } from './extraction-nested.component';

describe('ExtractionNestedComponent', () => {
  let component: ExtractionNestedComponent;
  let fixture: ComponentFixture<ExtractionNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
