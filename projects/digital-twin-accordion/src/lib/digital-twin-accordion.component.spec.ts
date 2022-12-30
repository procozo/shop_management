import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { PaginatorModule } from 'primeng/paginator';
import { DigitalTwinCardModule } from 'projects/digital-twin-card/src/public-api';

import { DigitalTwinAccordionComponent } from './digital-twin-accordion.component';

describe('DigitalTwinAccordionComponent', () => {
  let component: DigitalTwinAccordionComponent;
  let fixture: ComponentFixture<DigitalTwinAccordionComponent>;
  let mockData = {
    accordionTab: [
      {
        rowsNumber: 2,
        selected: true,
        title: "Models",
        enableSearch: true,
        enablePaginate: true,
        cardData: [
          {
          description: "The first card lib demo",
          iconTitle: "complete",
          isCreatedAt: "12/12/12",
          isDelete: true,
          isExport: false,
          isMultiple: false,
          isStatus: true,
          statusValue: true,
          title: "test"
          }
        ]
      },
      {
        selected: true,
        title: "Models",
        enableSearch: true,
        enablePaginate: false,
        cardData: [
          {
          description: "The first card lib demo",
          iconTitle: "complete",
          isCreatedAt: "12/12/12",
          isDelete: true,
          isExport: false,
          isMultiple: false,
          isStatus: true,
          statusValue: true,
          title: "test_mock"
          }
        ]
      },
      {
        selected: true,
        title: "Models",
        enableSearch: true,
        enablePaginate: true,
        cardData: [
          {
          description: "The first card lib demo",
          iconTitle: "complete",
          isCreatedAt: "12/12/12",
          isDelete: true,
          isExport: false,
          isMultiple: false,
          isStatus: true,
          statusValue: true,
          title: "test"
          }
        ]
      },
    ]
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwinAccordionComponent ],
      imports: [ PaginatorModule, AccordionModule, BrowserAnimationsModule,
        DigitalTwinCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTwinAccordionComponent);
    component = fixture.componentInstance;
    component.accordionOptions = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call oninit', async() => {
    spyOn(component, 'onPageChange').and.callThrough();
    component.ngOnInit();
    expect(component.onPageChange).toHaveBeenCalled();
  });

  it('should call searchModalsEvent to filter with data', async() => {
    spyOn(component, 'onPageChange').and.callThrough();
    const compiled = fixture.debugElement;
    const select = compiled.query(By.css('#select-menu')).nativeElement;
    let eve = select.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    eve = {
      target : {
        value : 'test'
      }
    };
    let data = mockData['accordionTab']?.[1];
    component.searchModalsEvent(eve, data);
    expect(component.onPageChange).toHaveBeenCalled();
  });

  it('should call searchModalsEvent to filter without data', async() => {
    spyOn(component, 'onPageChange').and.callThrough();
    let data = mockData['accordionTab']?.[0];
    let event = new InputEvent('click'); 
    let el:HTMLElement = fixture.nativeElement.querySelector('div');
    el.dispatchEvent(event);
    component.searchModalsEvent(event, data);
    expect(component.onPageChange).toHaveBeenCalled();
  });
});
