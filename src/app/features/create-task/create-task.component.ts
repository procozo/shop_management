import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AssignedElements,
  Card,
  CheckBoxInterface,
  TaskList,
  TasksConfig,
  TasksDropDown,
} from 'src/app/interfaces/project';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, LDIGITALStore } from 'src/app/interfaces/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as LDIGITALActions from '../../actions/lDigital.store.action';
import { MessageService } from 'primeng/api';
import { LogicHelperService } from 'src/app/helpers/logic-helper.service';
import { ConfirmationService } from 'primeng/api';
import { HelperData } from 'src/app/config/constant.data.config';
import { CreateTaskDataInterface } from './CreateTaskConfig';
import { ProjectService } from 'src/app/services/project/project.service';

export enum types {
  assignElement = 'assignElements',
  delete = 'delete',
  runTest = 'Run test',
}

@Component({
  selector: 'zf-digital-twin-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @Input() taskListArray!: Card[];
  @Output() runTaskTest = new EventEmitter();
  @Output() createTaskEmmiter = new EventEmitter();
  @Output() assignSelectedElementsEmmiter = new EventEmitter();
  isAssignment = false;
  storeData!: Observable<LDIGITALStore>;
  createTaskForm!: FormGroup;
  dropDownOptions!: TasksConfig;
  tasksList!: TaskList[];
  assignedTasks: TaskList[] = [];
  selectedTasks: Card[] = [];
  assignedElements!: AssignedElements;
  selectedModels: Card[] = [];
  selectedParams: Card[] = [];
  selectedTests: Card[] = [];
  createdTasksList: Card[] = [];
  enableToaster = false;
  isTaskAvailable = false;
  selectedCardTask!: Card;
  isCardTaskSelected = false;
  tempoloryAssignedDatatoView!: AssignedElements;
  isTaskDataView = false;
  workflowSteps!: TasksDropDown[];
  pageData: CreateTaskDataInterface =
    HelperData.applicationVariables.createTasksMainBlock;

  /**
   *
   * @param store New blkoxk
   * @param messageService
   * @param helper
   * @param projectservice
   * @param confirmationService
   */

  statusArray!: TasksDropDown[];
  busniessType!: TasksDropDown[];
  constructor(
    private store: Store<AppState>,
    private messageService: MessageService,
    public helper: LogicHelperService,
    public projectservice: ProjectService,
    private confirmationService: ConfirmationService
  ) {
    this.statusArray = [
      {
        code: '1',
        title: 'Vacant',
      },
      {
        code: '2',
        title: 'Occupied',
      },
    ];
    this.busniessType = [
      {
        code: '1',
        title: 'Medical',
      },
      {
        code: '2',
        title: 'Bar',
      },
    ];
  }

  ngOnInit(): void {
    this.taskListArray = [];
    this.storeData = this.store.select('store');
    this.storeData.subscribe((store) => {
      console.log('store subscribe', store);
      this.tasksList = JSON.parse(JSON.stringify(store?.tasksList));
      console.log(this.tasksList);
      this.assignedElements = JSON.parse(
        JSON.stringify(store?.assignedElement)
      );
      console.log(this.assignedElements);
    });

    this.createTaskForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[A-Za-z0-9 ]*$'),
        ],
      }),
      description: new FormControl(null),
      template: new FormControl(null),
      workflow: new FormControl(null),
      floor_no: new FormControl(null),
      size_of_shop: new FormControl(null),
      shop_no: new FormControl(null),
      type_of_business: new FormControl(null),
      status_of_shop: new FormControl(null),
      tenant_name: new FormControl(null),
      mobile: new FormControl(null),
      email: new FormControl(null),
      address: new FormControl(null),
      adhar: new FormControl(null),
      agreement_name: new FormControl(null),
      agreement_effective_date: new FormControl(null),
      agreement_renewal_date: new FormControl(null),
      agreement_term_date: new FormControl(null),
      renewal_period: new FormControl(null),
      renewal_effective_date: new FormControl(null),
      renewal_term_date: new FormControl(null),
      renewal_agreement_amount: new FormControl(null),
    });
    this.dropDownOptions = {
      templates: HelperData?.taskElements.templates as TasksDropDown[],
      // workflows: HelperData?.taskElements?.workflowSteps
    };
    console.log(this.dropDownOptions);
  }

  get getFormControls() {
    return this.createTaskForm.controls;
  }

  /**
   *
   * @param event
   */
  checkTaskNames(event: Event) {
    try {
      this.isTaskAvailable = false;
      const taskName = (event.target as HTMLInputElement).value;
      const result = this.tasksList.find(
        (el: TaskList) => el.title?.toLowerCase() === taskName.toLowerCase()
      );
      if (result) {
        this.isTaskAvailable = true;
      }
    } catch (error) { }
  }

  createTask() {
    try {
      if (this.createTaskForm?.valid && !this.isTaskAvailable) {
        this.createdTasksList = [];
        // const taskObject = {
        //   ...this.createTaskForm.value,
        //   isAssigned: false,
        //   assignedElements: { models: [], parameters: [], tests: [] },
        // };
        // this.tasksList.push(taskObject);
        // Object.assign(this.tasksList, JSON.parse(JSON.stringify(taskObject)));
        let shopPayload = {
          title: this.createTaskForm.value.title,
          basic_details: {
            floor_no: this.createTaskForm.value.floor_no,
            size_of_shop: this.createTaskForm.value.size_of_shop,
            shop_no: this.createTaskForm.value.shop_no,
            type_of_business: this.createTaskForm.value.type_of_business?.title,
          },
          status_of_shop: this.createTaskForm.value.status_of_shop?.title,
          Shop_tenant_details: {
            tenant_name: this.createTaskForm.value.tenant_name,
            tenant_kyc_details: {
              adhar_no: 0,
              other: null,
            },
            tenant_contact_details: {
              mobile: this.createTaskForm.value.mobile,
              email: this.createTaskForm.value.email,
              address: this.createTaskForm.value.address,
              adhar: this.createTaskForm.value.adhar,
            },
            agreement_details: {
              agreement_name: this.createTaskForm.value.agreement_term_date,
              agreement_effective_date:
                this.createTaskForm.value?.agreement_effective_date,
              agreement_renewal_date:
                this.createTaskForm.value?.agreement_renewal_date,
              agreement_term_date:
                this.createTaskForm.value?.agreement_term_date,
            },
            // renewal_details: [
            //   {
            //     renewal_period: {
            //       from_data: this.createTaskForm.value.shop_no,
            //       to_date: this.createTaskForm.value.shop_no,
            //     },
            //     renewal_effective_date: this.createTaskForm.value.shop_no,
            //     renewal_term_date: this.createTaskForm.value.shop_no,
            //     renewal_agreement_amount: this.createTaskForm.value.shop_no,
            //   },
            // ],
          },
          // agrement_details: [
          //   {
          //     agreement_id: 1,
          //     agreement_effective_date: this.createTaskForm.value.shop_no,
          //     agreement_term_date: this.createTaskForm.value.shop_no,
          //     contact_renewal_amount_percentage:
          //       this.createTaskForm.value.shop_no,
          //     deposit_return_date: this.createTaskForm.value.shop_no,
          //     deposit_return_amount: this.createTaskForm.value.shop_no,
          //     deposit_details: {
          //       deposit_amount: this.createTaskForm.value.shop_no,
          //       deposit_received_date: this.createTaskForm.value.shop_no,
          //       deposit_credited_date: this.createTaskForm.value.shop_no,
          //       deposit_credited_bank: this.createTaskForm.value.shop_no,
          //       deposit_text: this.createTaskForm.value.shop_no,
          //     },
          //     status: this.createTaskForm.value.shop_no,
          //   },
          // ],
          // shop_notice_to_vacate: {
          //   isvacate: true,
          //   notice_details: {
          //     notice_date: 43242344,
          //     remider_given: 3,
          //     vacate_date: 9809890890890,
          //     shop_deposit_amount: 50000,
          //     shop_deposit_return: 50000,
          //     shop_deposit_return_date: 90809890890890,
          //   },
          // },
          // rental_details: {
          //   retal_agreed: 10000,
          //   retal_date: 23123232323,
          //   rental_history: {},
          // },
        };
        console.log(shopPayload);
        // this.createTaskForm.reset();
        const dataToEmit: {} = {
          title: this.createTaskForm.value.title,
          basic_details: {
            floor_no: this.createTaskForm.value.floor_no,
            size_of_shop: this.createTaskForm.value.size_of_shop,
            shop_no: this.createTaskForm.value.shop_no,
            type_of_business: this.createTaskForm.value.type_of_business?.title,
          },
          status_of_shop: this.createTaskForm.value.status_of_shop?.title,
        };
        this.createTaskEmmiter.emit(shopPayload);
      }
    } catch (error) { }
  }
}
