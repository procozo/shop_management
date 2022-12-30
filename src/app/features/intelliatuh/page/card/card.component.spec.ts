import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponentFeature } from "./card.component";

describe("CardComponent", () => {
  let component: CardComponentFeature;
  let fixture: ComponentFixture<CardComponentFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponentFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponentFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
