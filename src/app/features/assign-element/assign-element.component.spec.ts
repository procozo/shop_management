import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignElementComponent } from './assign-element.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { LDIGITALReducer } from 'src/app/reducers/LdigitalReducer';
import { LDIGITALStore } from 'src/app/interfaces/store';
import { Actions } from 'src/app/actions/lDigital.store.action';



fdescribe('AssignElementComponent', () => {
  let component: AssignElementComponent;
  let fixture: ComponentFixture<AssignElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignElementComponent],
      imports: [StoreModule.forRoot({
        store: LDIGITALReducer, runtimeChecks: {
          // strictStateImmutability and strictActionImmutability are enabled by default
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
          // if you want to change complexe objects and that we have. We need to disable these settings
          // change strictStateImmutability, strictActionImmutability
          strictStateImmutability: false, // set this to false
          strictActionImmutability: true,
        },
      } as ActionReducerMap<LDIGITALStore, Actions>),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssignElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchModalsEvent', async () => {
    component.searchModalsEvent('model1', 0);
  });
});
