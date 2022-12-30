import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionComponent } from './exclusion.component';

describe('ExclusionComponent', () => {
  let component: ExclusionComponent;
  let fixture: ComponentFixture<ExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
