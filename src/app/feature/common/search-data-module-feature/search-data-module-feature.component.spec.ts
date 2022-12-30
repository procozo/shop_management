import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataModuleFeatureComponent } from './search-data-module-feature.component';

describe('SearchDataModuleFeatureComponent', () => {
  let component: SearchDataModuleFeatureComponent;
  let fixture: ComponentFixture<SearchDataModuleFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataModuleFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDataModuleFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
