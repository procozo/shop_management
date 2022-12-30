import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAdminComponent } from './program-admin.component';

describe('ProgramAdminComponent', () => {
  let component: ProgramAdminComponent;
  let fixture: ComponentFixture<ProgramAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
