import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompilationComponent } from './recompilation.component';

describe('RecompilationComponent', () => {
  let component: RecompilationComponent;
  let fixture: ComponentFixture<RecompilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecompilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
