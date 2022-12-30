import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegatoTableComponent } from './legato-table.component';

describe('LegatoTableComponent', () => {
  let component: LegatoTableComponent;
  let fixture: ComponentFixture<LegatoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegatoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegatoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
