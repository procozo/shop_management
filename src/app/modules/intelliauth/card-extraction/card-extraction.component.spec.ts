import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExtractionComponent } from './card-extraction.component';

describe('CardExtractionComponent', () => {
  let component: CardExtractionComponent;
  let fixture: ComponentFixture<CardExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExtractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
