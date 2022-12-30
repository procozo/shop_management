import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Accordion, AssignedElementConfig, AssignedElements, AssignElementsAPI, Card, CheckBoxInterface, Element, MetaDataType, PlaceHolder, SearchCategory, SearchElements, SearchMetaData, TaskList, TasksDropDown } from 'src/app/interfaces/project';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store';
import * as LDIGITALActions from '../../actions/lDigital.store.action';
import { HomeService } from 'src/app/services/home.service';
import { Data } from 'src/app/config/data';
import { AssignElementsConfig } from './AssignElementConfig';
import { HelperData } from 'src/app/config/constant.data.config';

@Component({
  selector: 'zf-digital-twin-tb-assign-element',
  templateUrl: './assign-element.component.html',
  styleUrls: ['./assign-element.component.scss']
})

export class AssignElementComponent implements OnInit, OnChanges {
  @Input() modelDataList!: Card[];
  @Input() paramList!: Card[];
  @Input() testList!: Card[];
  @Input() options!: AssignedElementConfig;
  @Input() searchElementsOptions!: SearchElements;
  @Input() accordionOptions!: Accordion;
  @Input() searchMetaDataList!: AssignElementsAPI;
  @Input() templateList: TasksDropDown[] = [];
  searchElementForm!: FormGroup;
  @Output() submitSearchevent = new EventEmitter();
  @Output() selectedCardEvent = new EventEmitter();
  @Output() clickAssign = new EventEmitter();
  @Output() deletedData = new EventEmitter();
  @Output() assignElementEmit = new EventEmitter();
  public assignedModels: Card[] = [];
  public assignedParameters: Card[] = [];
  public assignedTests: Card[] = [];
  public assignedElements: AssignedElements = { models: [], parameters: [], tests: [] };
  public swappedAPIElements: AssignedElements = { models: [], parameters: [], tests: [] };
  selectedSearchCategory = 0;
  activeIndex!: number;
  optionsData!: object[];
  totalModelDataList!: Card[];
  totalParamList!: Card[];
  totalTestList!: Card[];
  searchInput!: string;
  isSwap = false;
  placeHolderConfig: PlaceHolder | undefined;
  totalAssignedElements!: AssignedElements;
  enableAssign = false;
  enableDelete = false;
  enableElementField!: number;
  selectElementList: TasksDropDown[] = [];
  searchMetaDataInput!: AssignElementsAPI;
  selectedAttributeList: {}[] = [];
  tempModels: [] = [];
  pageData: AssignElementsConfig = HelperData.applicationVariables.assignedElementsMainBlock;

  constructor(public store: Store<AppState>, public homeService: HomeService) { }



  /**
   * @para
   */
  ngOnInit(): void {
    try {
      this.searchElementForm = new FormGroup({
        attributeType: new FormControl(null),
        elementType: new FormControl(null),
        templateType: new FormControl(null),
        textElement: new FormControl(null)
      });



      this.store.select('store').subscribe((store) => {
        this.modelDataList = store.searchResult?.modelList || [];
        this.totalModelDataList = store.searchResult?.modelList || [];
        this.paramList = store.searchResult?.paramsList || [];
        this.totalParamList = store.searchResult?.paramsList || [];
        this.testList = store.searchResult?.testList || [];
        this.totalTestList = store.searchResult?.testList || [];
        this.swappedAPIElements = JSON.parse(JSON.stringify(
          {
            models: JSON.parse(JSON.stringify(this.modelDataList)),
            parameters: JSON.parse(JSON.stringify(this.paramList)),
            tests: JSON.parse(JSON.stringify(this.testList))
          }
        ));
        console.log(store)
        if (Object.keys(JSON.parse(JSON.stringify(store?.assignedElement)))?.length !== 0) {
          this.assignedElements = JSON.parse(JSON.stringify(store?.assignedElement));
          this.totalAssignedElements = JSON.parse(JSON.stringify(store?.assignedElement));
          this.alignElementsOnLoad();
        } else {
          this.assignedElements = { models: [], parameters: [], tests: [] }
          this.totalAssignedElements = { models: [], parameters: [], tests: [] }
        }
        if (this.assignedElements?.models) { this.activeIndex = this.selectedSearchCategory }
        if (store.searchMetaData) {
          this.searchMetaDataInput = store.searchMetaData
        }
      });
      // this.searchMetaData();

    } catch (error) {

    }
  }

  searchMetaData() {
  };

  searchTypeSelection(event: HTMLInputElement) {
    const type: PlaceHolder = (event as HTMLInputElement)?.value as PlaceHolder
    console.log(type)
    switch ((type as { title: string })?.title) {
      case 'Models':
        console.log(this.searchMetaDataInput.Models);
        (this.searchMetaDataInput.Models as []).forEach((res) => {
          // console.log(Object.keys(res)[0])

          (this.selectedAttributeList as PlaceHolder[]).push({
            title: Object.keys(res)[0],
            type: res[Object.keys(res)[1]],
            value: res[Object.keys(res)[0]]
          })
        })
        break;
      case 'Parameters':
        console.log(this.searchMetaDataInput.Parameter);
        (this.searchMetaDataInput.Parameter as []).forEach((res) => {
          // console.log(Object.keys(res)[0])

          (this.selectedAttributeList as PlaceHolder[]).push({
            title: Object.keys(res)[0],
            type: res[Object.keys(res)[1]],
            value: res[Object.keys(res)[0]]
          })
          // console.log(this.selectedAttributeList)
        })
        break;

      case 'Tests':
        console.log(this.searchMetaDataInput.Parameter);
        (this.searchMetaDataInput.Parameter as []).forEach((res) => {
          // console.log(Object.keys(res)[0])

          (this.selectedAttributeList as PlaceHolder[]).push({
            title: Object.keys(res)[0],
            type: res[Object.keys(res)[1]],
            value: res[Object.keys(res)[0]]
          })
        })
        break;
      default:
        break;
    }

    // /* tslint:disable:no-string-literal */
    // this.searchElementForm.controls['textElement'].reset();
    // this.searchElementForm.controls['attributeType'].reset();
    // /* tslint:disable:no-string-literal */
    // this.options.attributeList = [];
    // this.searchData[this.searchElementForm.value.elementType.title].forEach((el: MetaDataType) => {
    //   this.options.attributeList?.push({ title: Object.keys(el)[0] })
    // });
  }

  searchAttributeSelection($event: HTMLInputElement) {
    console.log($event?.value)
    this.selectElementList = [];
    /* tslint:disable:no-string-literal */
    this.searchElementForm.controls['textElement'].reset();
    /* tslint:disable:no-string-literal */
    const attributeObject = ($event?.value as PlaceHolder);
    if (attributeObject) {
      switch (attributeObject.type) {
        case 'multiSelect':
          this.enableElementField = 3;
          (attributeObject.value as []).forEach((el: string) => {
            console.log(el)
            this.selectElementList.push({ title: el, code: el });
          });
          break;
        case 'singleSelect':
          this.enableElementField = 2;

          (attributeObject.value as []).forEach((el: string) => {
            console.log(el)
            this.selectElementList.push({ title: el, code: el });
            setTimeout(() => {
              this.selectElementList = [...this.selectElementList]
              console.log(this.selectElementList)
            }, 100)
          });
          console.log(this.selectElementList)
          break;
        case 'str':
          this.enableElementField = 1;
          break;
        default:
          break;
      }
    }
  }

  /**
   * handle the mars and non mars elements with respect to UI models
   * @param $event
   */

  changeTemplate($event: HTMLInputElement): void {
    console.log($event?.value)
    if (($event.value as TasksDropDown).title === 'Mars') {
      this.store.dispatch(new LDIGITALActions.UpdateSelectedTemplate({
        templateSelected: ($event.value as TasksDropDown).title
      }))

      Object.defineProperty(this.assignedElements, 'models', {
        enumerable: false,
      });
      console.log(this.assignedElements)
    } else {
      setTimeout(() => {
        Object.defineProperty(this.assignedElements, 'models', {
          enumerable: true,
        });
        console.log(this.assignedElements)
        this.assignedElements = { ...this.assignedElements }
      }, 100)


    }
  }


  alignElementsOnLoad() {
    this.assignedModels = JSON.parse(JSON.stringify(this.assignedElements.models)) || [];
    this.assignedParameters = JSON.parse(JSON.stringify(this.assignedElements.parameters)) || [];
    this.assignedTests = JSON.parse(JSON.stringify(this.assignedElements.tests)) || [];
    if (this.assignedElements?.models?.length !== 0) {
      this.modelDataList = this.filterOnSelected(this.assignedModels, this.totalModelDataList, '');
    }
    if (this.assignedElements?.models?.length !== 0) {
      this.paramList = this.filterOnSelected(this.assignedParameters, this.totalParamList, '');
    }
    if (this.assignedElements?.models?.length !== 0) {
      this.testList = this.filterOnSelected(this.assignedTests, this.totalTestList, '');
    }
    if (this.isSwap) {
      this.swappedAPIElements = JSON.parse(JSON.stringify(
        {
          models: JSON.parse(JSON.stringify(this.modelDataList)),
          parameters: JSON.parse(JSON.stringify(this.paramList)),
          tests: JSON.parse(JSON.stringify(this.testList))
        }
      ));
    }
  }

  /**
   * NgOnInit()
   */
  ngOnChanges(): void { }

  /**
   *
   * @param searchText
   * @param data
   */
  searchModalsEvent(searchText: string, type: number) {
    this.searchInput = searchText;
    try {
      const searchTypes = ['models', 'parameters', 'tests'];
      switch (searchTypes[type]) {
        case 'models':
          if (!this.isSwap) {
            this.modelDataList = this.filterOnSelected(this.assignedModels, this.totalModelDataList, searchText);
          } else {
            this.assignedElements.models = this.totalAssignedElements.models?.filter((el: Card) => el.title.includes(searchText));
          }
          break;
        case 'parameters':
          if (!this.isSwap) {
            this.paramList = this.filterOnSelected(this.assignedParameters, this.totalParamList, searchText);
          } else {
            this.assignedElements.parameters = this.totalAssignedElements.parameters?.filter((el: Card) => el.title.includes(searchText));
          }
          break;
        case 'tests':
          if (!this.isSwap) {
            this.testList = this.filterOnSelected(this.assignedTests, this.totalTestList, searchText);
          } else {
            this.assignedElements.tests = this.totalAssignedElements.tests?.filter((el: Card) => el.title.includes(searchText));
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error)
    }
  }

  /**
   *
   * @param assignedData
   * @param totalData
   * @returns
   */
  filterOnSelected(assignedData: Card[], totalData: Card[], searchText: string) {
    const models = JSON.parse(JSON.stringify(totalData));
    models.map((dataCard: Card) => dataCard.isChecked = false);
    assignedData.forEach((cardData: Card) => {
      const item = models.find((el: Card) => (el.title === cardData.title));
      if (item) {
        item.isChecked = true;
      }
    });
    return models.filter(((el: Card) => el.title.includes(searchText)));
  }

  searchElements(): void {
    try {
      console.log(this.searchElementForm?.value)
      const selectedlist: (string | undefined)[] = [];
      let obj;
      console.log(typeof this.searchElementForm.value.textElement)
      if (typeof this.searchElementForm.value.textElement === 'string') {
        obj = {
          [this.searchElementForm.value.attributeType.title]: this.searchElementForm.value.textElement
        }
      } else {
        if (Array.isArray(this.searchElementForm.value.textElement)) {
          this.searchElementForm.value.textElement?.map((el: TasksDropDown) => {
            selectedlist.push(el.title);
          });
          obj = {
            [this.searchElementForm.value.attributeType?.title]: selectedlist,
          }
        } else {
          obj = {
            [this.searchElementForm.value.attributeType?.title]: this.searchElementForm.value.textElement?.title,
          }
        }
      }
      const requestObj = {
        type: String(this.searchElementForm?.value?.elementType?.title).toLowerCase() === 'parameters' ? 'Parameter' : this.searchElementForm?.value?.elementType?.title,
        attributes: Object.assign(obj, {
          elementType: {
            title: String(this.searchElementForm?.value?.elementType?.title).toLowerCase() === 'parameters' ? 'Parameter' : this.searchElementForm?.value?.elementType?.title
          }
        }),
      };
      if (String(this.searchElementForm?.value?.elementType?.title).toLowerCase() === 'models') {
        Object.assign(requestObj, { templateType: this.searchElementForm?.value?.templateType?.title ? this.searchElementForm?.value?.templateType?.title : 'default' })
      }
      console.log(requestObj)
      this.submitSearchevent.emit(requestObj);
    } catch (error) {

    }


  }

  swapElements() {
    this.searchInput = '';
    this.isSwap = !this.isSwap;
    this.alignElementsOnLoad();
  }

  assignElements() {
    try {
      this.enableAssign = false;
      this.enableDelete = false;
      this.activeIndex = this.selectedSearchCategory;
      this.searchInput = '';
      Object.assign(this.assignedElements, {
        models: JSON.parse(JSON.stringify(this.assignedModels)).map((el: Card) =>
          Object.assign(el, { isDelete: true, type: 'Models', isSingleCheckUI: true, deleteIcon: 'assets/icons/delete.svg', } as Card)

        ), parameters: JSON.parse(JSON.stringify(this.assignedParameters)).map((el: Card) =>
          Object.assign(el, { isDelete: true, type: 'Parameters', isSingleCheckUI: true, deleteIcon: 'assets/icons/delete.svg', })

        ), tests: JSON.parse(JSON.stringify(this.assignedTests)).map((el: Card) =>
          Object.assign(el, { isDelete: true, type: 'Tests', isSingleCheckUI: true, deleteIcon: 'assets/icons/delete.svg', })
        )
      });
      if (this.assignedElements) {
        this.store.dispatch(new LDIGITALActions.AddAssignElement({
          assignedElement: Object.assign({}, JSON.parse(JSON.stringify(this.assignedElements)))
        }))
      }
      this.updateStore();
      this.clickAssign.emit(true)
    } catch (error) {
    }
  }

  deleteEventOnAccordion($event: CheckBoxInterface) {
    try {
      this.enableAssign = false;
      switch ($event?.data?.type) {
        case 'Models':
          this.selectedSearchCategory = 0;
          const modelsSize = this.assignedElements.models?.length || 0;
          if (!this.isSwap && (this.assignedModels.length > modelsSize)) {
            this.assignedModels = [];
            this.assignedElements.models?.forEach((el: Card) => {
              this.assignedModels.push(el);
            });
            this.modelDataList = this.filterOnSelected(this.assignedModels, this.totalModelDataList, '');
          }
          if (this.isSwap && (this.assignedModels.length < modelsSize)) {
            this.assignedModels = JSON.parse(JSON.stringify(this.assignedElements.models)) || [];
          }
          this.deleteSelectedAssignData($event, this.assignedModels);
          break;
        case 'Parameters':
          this.selectedSearchCategory = 1;
          const paramSize = this.assignedElements.parameters?.length || 0;
          if (!this.isSwap && (this.assignedParameters.length > paramSize)) {
            this.assignedParameters = [];
            this.assignedElements.parameters?.forEach((el: Card) => {
              this.assignedParameters.push(el);
            });
            this.paramList = this.filterOnSelected(this.assignedParameters, this.totalParamList, '');
          }
          if (this.isSwap && (this.assignedModels.length < paramSize)) {
            this.assignedParameters = JSON.parse(JSON.stringify(this.assignedElements.parameters)) || [];
          }
          this.deleteSelectedAssignData($event, this.assignedParameters);
          break;
        case 'Tests':
          this.selectedSearchCategory = 2;
          const testSize = this.assignedElements.tests?.length || 0;
          if (!this.isSwap && (this.assignedTests.length > testSize)) {
            this.assignedParameters = [];
            this.assignedElements.tests?.forEach((el: Card) => {
              this.assignedTests.push(el);
            });
            this.testList = this.filterOnSelected(this.assignedTests, this.totalTestList, '');
          }
          if (this.isSwap && (this.assignedModels.length < testSize)) {
            this.assignedTests = JSON.parse(JSON.stringify(this.assignedElements.tests)) || [];
          }
          this.deleteSelectedAssignData($event, this.assignedTests);
          break;
        default:
          break;
      }
    } catch (error) {

    }
  }

  deleteSelectedAssignData($event: CheckBoxInterface, data: Card[]) {
    if (this.isSwap) {
      if ($event?.checked) {
        $event.data.isChecked = false;
        const result = data.find(el => el.title === $event?.data?.title);
        if (!result) {
          data.push($event?.data);
        }
        this.enableOnAssign();
      } else {
        const index = data.findIndex((el) => el?.title === $event?.data?.title);
        if (index > -1) {
          data.splice(index, 1)
        }
      }
    } else {
      if (!$event?.checked) {
        const result = data.find(el => el.title === $event?.data?.title);
        if (!result) {
          data.push($event?.data);
        }
      } else {
        const index = data.findIndex((el) => el?.title === $event?.data?.title);
        if (index > -1) {
          data.splice(index, 1)
        }
        if ($event?.type === 'delete') {
          this.assignElements();
        }
      }
      this.enableOnDelete();
    }
  }

  selectCardEventHandler($event: CheckBoxInterface) {
    try {
      this.enableDelete = false;
      console.log('Selected')
      switch ($event?.data?.type) {
        case 'Models':
          this.selectedSearchCategory = 0;
          const modelsSize = this.modelDataList.filter((el: Card) => el.isChecked);
          if (this.isSwap && this.assignedModels.length > modelsSize.length) {
            this.assignedModels = [];
            this.modelDataList.forEach((el: Card) => {
              if (el.isChecked) {
                // el.isChecked =
                this.assignedModels.push(el);
              }
            })
          }
          const modelsLength = this.assignedElements.models?.length || 0;
          if (!this.isSwap && this.assignedModels.length < modelsLength) {
            this.assignedModels = JSON.parse(JSON.stringify(this.assignedElements?.models)) || [];
          }
          this.updateselectedAssignData($event, this.assignedModels);
          break;
        case 'Parameters':
        case 'Parameter':
          console.log('Selected')
          this.selectedSearchCategory = 1;
          const paramsSize = this.paramList.filter((el: Card) => el.isChecked);
          if (this.isSwap && this.assignedParameters.length > paramsSize.length) {
            this.assignedParameters = [];
            this.paramList.forEach((el: Card) => {
              if (el.isChecked) {
                this.assignedParameters.push(el);
              }
            })
          }
          const paramsLength = this.assignedElements.parameters?.length || 0;
          if (!this.isSwap && this.assignedParameters.length < paramsLength) {
            this.assignedParameters = JSON.parse(JSON.stringify(this.assignedElements?.parameters)) || [];
          }
          this.updateselectedAssignData($event, this.assignedParameters);
          break;
        case 'Tests':
          this.selectedSearchCategory = 2;
          const testSize = this.testList.filter((el: Card) => el.isChecked);
          if (this.isSwap && this.assignedTests.length > testSize.length) {
            this.assignedTests = [];
            this.testList.forEach((el: Card) => {
              if (el.isChecked) {
                // el.isChecked =
                this.assignedTests.push(el);
              }
            })
          }
          const testsLength = this.assignedElements.tests?.length || 0;
          if (!this.isSwap && this.assignedTests.length < testsLength) {
            this.assignedTests = JSON.parse(JSON.stringify(this.assignedElements?.tests)) || [];
          }
          this.updateselectedAssignData($event, this.assignedTests);
          break;
        default:
          break;
      }
    } catch (error) {

    }
  }

  updateselectedAssignData($event: CheckBoxInterface, data: Card[]) {
    if (this.isSwap) {
      this.enableAssign = false;
      if (!$event?.checked) {
        $event.data.isChecked = false;
        data.push($event?.data);
      } else {
        $event.data.isChecked = false;
        const index = data.findIndex((el) => el?.title === $event?.data?.title);
        if (index > -1) {
          data.splice(index, 1)
        }
        if ($event.type === 'delete') {
          this.assignElements();
        }
      }
      this.enableOnDelete();
    } else {
      if ($event?.checked) {
        $event.data.isChecked = false;
        const result = data.find(el => el.title === $event?.data?.title);
        if (!result) {
          data.push($event?.data);
        }
      } else {
        const index = data.findIndex((el) => el?.title === $event?.data?.title);
        if (index > -1) {
          data.splice(index, 1)
        }
      }
      this.enableOnAssign();
    }
  }

  updateStore() {
    Object.keys(this.assignedElements).forEach(key => {
      switch (key) {
        case 'models':
          this.updateSelection(this.modelDataList, this.assignedElements?.models || [], 'Models')
          break;
        case 'parameters':
          this.updateSelection(this.paramList, this.assignedElements?.parameters || [], 'Parameters')
          break;
        case 'tests':
          this.updateSelection(this.testList, this.assignedElements?.tests || [], 'Tests')
          break;
      }
    })
  }

  updateSelection(data: Card[], assignedData: Card[], type: string) {
    const types = ['Models', 'Parameters', 'Tests'];
    const models = JSON.parse(JSON.stringify(data));
    models.map((dataCard: Card) => dataCard.isChecked = false);
    assignedData.forEach((cardData: Card) => {
      const item = models.find((el: Card) => (el.title === cardData.title));
      if (item) {
        item.isChecked = true;
      }
    });
    this.store.dispatch(new LDIGITALActions.AddSearchResultToStore({
      searchResult: {
        modelList: type === types[0] ? models : this.modelDataList,
        paramsList: type === types[1] ? models : this.paramList,
        testList: type === types[2] ? models : this.testList
      }
    }))
  }

  enableOnDelete() {
    if ((this.assignedModels.length === this.assignedElements?.models?.length) && (this.assignedParameters.length === this.assignedElements?.parameters?.length)
      && (this.assignedTests.length === this.assignedElements?.tests?.length)) {
      this.enableDelete = false;
    } else {
      this.enableDelete = true;
    }
  }

  enableOnAssign() {
    if ((this.assignedModels.length === 0) && (this.assignedParameters.length === 0) && (this.assignedTests.length === 0)) {
      this.enableAssign = false;
    } else {
      this.enableAssign = true;
    }
  }
}
