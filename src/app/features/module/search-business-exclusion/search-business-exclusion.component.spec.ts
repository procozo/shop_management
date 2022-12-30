import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusinessExclusionComponent } from './search-business-exclusion.component';

describe('SearchBusinessExclusionComponent', () => {
  let component: SearchBusinessExclusionComponent;
  let fixture: ComponentFixture<SearchBusinessExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBusinessExclusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBusinessExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
