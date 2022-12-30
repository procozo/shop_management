import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffTestingComponent } from './diff-testing.component';

describe('DiffTestingComponent', () => {
  let component: DiffTestingComponent;
  let fixture: ComponentFixture<DiffTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
