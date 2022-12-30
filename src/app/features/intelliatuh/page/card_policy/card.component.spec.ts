import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponentFeaturePolicy } from "./card.component";

describe("CardComponent", () => {
  let component: CardComponentFeaturePolicy;
  let fixture: ComponentFixture<CardComponentFeaturePolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponentFeaturePolicy],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponentFeaturePolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
