import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import {
  AssignedElements,
  CheckBoxInterface,
  TaskList,
  TestResults,
  Card,
  TasksDropDown,
  MultiSelect,
  PlaceHolder,
  MetaDataType,
  DynamicCheckBox,
  ConfigType,
  ResponseAPI,
  SubData,
  ComplianceCheck,
  ConfigurationActions,
  ValidateTests,
} from "src/app/interfaces/project";
import { Data } from "src/app/config/data";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/interfaces/store";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { MenuItem } from "primeng/api";
import { HelperData } from "src/app/config/constant.data.config";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProjectService } from "src/app/services/project/project.service";
import * as LDIGITALActions from "../../actions/lDigital.store.action";
@Component({
  selector: "zf-digital-twin-tb-configuration-management",
  templateUrl: "./configuration-management.component.html",
  styleUrls: ["./configuration-management.component.scss"],
})
export class ConfigurationManagementComponent implements OnInit, OnChanges {
  isConfigCalled = false;
  templateSelected!: string;
  isRunningConsole!: boolean;
  currentTemplateStatus!: {};
  taskID!: string;
  jobIdTemp!: string;
  constructor(
    public store: Store<AppState>,
    public helper: LogicHelperService,
    public projectService: ProjectService
  ) { }
  @Input() modelDataList!: Card[];
  @Input() paramList!: Card[];
  @Input() testList!: Card[];
  @Input() assignedData!: {};
  @Input() resultConfigList!: Card[];
  @Input() taskToRunTest!: Card[];
  @Output() ErrorEvent = new EventEmitter();
  @Output() MarsEventCall = new EventEmitter();
  @Output() enableLoader = new EventEmitter();
  @Output() jobFetchToTaskEvent = new EventEmitter();
  @Output() currentTemplateEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter();
  assignedElements!: AssignedElements;
  tasksList!: TaskList[];
  assignedTasks: TaskList[] = [];
  selectedTasks: Card[] = [];
  selectedModels: Card[] = [];
  selectedParams: Card[] = [];
  selectedTests: Card[] = [];
  products: TestResults[] = [];
  cols!: MultiSelect[];
  enableSmokeTest = false;
  enableCompliance = false;
  workflowSteps!: TasksDropDown[];
  headerText: PlaceHolder = {};
  headerTextResults: PlaceHolder = {};
  placeHolderInfo: PlaceHolder = {};
  stepName!: string;
  @Input() simulatedFiles!: Card[];
  isAssigned!: boolean;

  items: {}[] = [{}];
  configForm!: FormGroup;
  selectedCategories: DynamicCheckBox[] = [];
  categories: DynamicCheckBox[] = [];
  jobResult!: Card;
  jobId!: string;
  jobName!: string;
  simulateProcessObject!: ConfigType;
  validationResults: ValidateTests = { complianceCheck: [], smokeTest: [] };
  CISVSimulationObj!: {};
  CISVSmokeTestObj!: {};
  modelAdvisor = "";
  showTick = false;

  ngOnInit(): void {
    this.simulatedFiles = [];
    this.categories = Data.simulateConfigData as DynamicCheckBox[];
    this.assignedElements = { models: [], parameters: [] };
    // this.resultConfigList = HelperData.testResultsOverview;
    this.store.select("store").subscribe((store) => {
      console.log("store subscribed on configurations", store);
      this.tasksList = JSON.parse(JSON.stringify(store?.tasksList));
      // if ((store?.CISV as { selectedModels: Card[] })?.selectedModels) {
      //   this.assignedElements.models = JSON.parse(JSON.stringify((store?.CISV as { selectedModels: Card[] })?.selectedModels))
      // } else {
      //   this.assignedElements.models = JSON.parse(JSON.stringify(((store?.taskSelectedAsssignedmentElements as { models: Card[] })?.models)))
      // }
      // if ((store?.CISV as { selectedParameters: Card[] })?.selectedParameters) {
      //   this.assignedElements.parameters = JSON.parse(JSON.stringify((store?.CISV as { selectedParameters: Card[] })?.selectedParameters))
      // } else {
      //   this.assignedElements.parameters = JSON.parse(JSON.stringify(((store?.taskSelectedAsssignedmentElements as { parameters: Card[] })?.parameters)))
      // }
      // if ((store?.CISV as { selectedTests: Card[] })?.selectedTests) {
      //   this.assignedElements.tests = JSON.parse(JSON.stringify((store?.CISV as { selectedTests: Card[] })?.selectedTests))
      // } else {
      //   this.assignedElements.tests = JSON.parse(JSON.stringify(((store?.taskSelectedAsssignedmentElements as { tests: Card[] })?.tests)))
      // }
      // if ((store?.CISV as { selectedTests: Card[] })?.selectedTests)
      this.assignedElements = JSON.parse(
        JSON.stringify(store?.taskSelectedAsssignedmentElements)
      );
      this.templateSelected = store?.templateSelected as string;
      // console.lo
      this.currentTemplateStatus =
        JSON.parse(JSON.stringify(store?.CISV)) || {};
      // setTimeout(() => {

      //   if (Object.keys((JSON.parse(JSON.stringify(store?.jobList))) as {}).includes('test')) {
      //     this.jobId = JSON.parse(JSON.stringify(store?.jobList))?.test?.[JSON.parse(JSON.stringify(store?.jobList))?.test.length - 1];
      //   } else {
      //     this.jobId = JSON.parse(JSON.stringify(store?.jobList))?.[this.stepName]?.[JSON.parse(JSON.stringify(store?.jobList))?.[this.stepName].length - 1];
      //   }
      //   if (store?.projectID === '34506') {
      //     this.jobId = 'ATS_d19d5890-38ee-4e3c-9bc8-af891b117243'
      //   }
      //   if (this.jobIdTemp) {
      //     this.jobId = this.jobIdTemp;
      //   }
      //   console.log(this.jobId, this.selectedTasks[this.selectedTasks?.length - 1].id)
      //   this.taskID = (store?.CISV as { task_id: string })?.task_id
      //   // this.JobStatus('test', this.jobId)
      // }, 1000)
    });
    console.log(this.templateSelected);
    this.assignedElements = {
      models: this.assignedElements.models,
      parameters: this.assignedElements.parameters,
    };

    // Object.assign(this.currentTemplateStatus, {})
    // this.showCheckedElements();
    this.setWorkflowSteps();
    this.simulateProcessObject = {
      write_statistics: false,
      write_famos: false,
      write_sankey: false,
      write_matlab: false,
      write_mf4: false,
      write_csv: false,
      use_timestamp_in_filename: false,
      write_input_file: false,
    };
  }

  ngOnChanges(): void {
    this.selectedTasks = this.taskToRunTest;
  }

  get getFormControls() {
    return this.configForm.controls;
  }

  setWorkflowSteps() {
    const result = this.tasksList.find(
      (el: TaskList) => el.title === this.selectedTasks[0].title
    );
    if (result) {
      this.workflowSteps = result.workflow || [];
    }
    console.log(this.templateSelected);
    console.log(HelperData.taskElements.templates as keyof {});
    const taskToStore: {} = {};
    (HelperData.taskElements.templates as []).map(
      (res: { title: string; steps: [] }) => {
        if (res?.title === (this.templateSelected as string)) {
          console.log(res.steps);
          res.steps.forEach((el: { code: string }) => {
            Object.assign(taskToStore, { [el.code]: true });
          });
        }
      }
    );
    this.currentTemplateEvent.emit({
      ...{ tasks: taskToStore },
      ...this.currentTemplateStatus,
    });
  }

  showCheckedElements() {
    try {
      this.assignedElements.models?.map((el: Card) => {
        el.isChecked = false;
        el.isDelete = false;
      });
      this.assignedElements.parameters?.map((el: Card) => {
        el.isChecked = false;
        el.isDelete = false;
      });
      this.assignedElements.tests?.map((el: Card) => {
        el.isChecked = false;
        el.isDelete = false;
      });
      if (this.selectedTasks.length === 1) {
        this.helper
          .viewCheckedElements(
            this.tasksList,
            this.selectedTasks,
            this.assignedElements,
            this.selectedModels,
            this.selectedParams,
            this.selectedTests
          )
          .then((res: AssignedElements) => {
            this.selectedModels = res.models || [];
            this.selectedParams = res.parameters || [];
            this.selectedTests = res.tests || [];
            this.checkForSelections();
          });
      } else {
        this.selectedModels = [];
        this.selectedParams = [];
        this.selectedTests = [];
      }
    } catch (error) { }
  }
  searchModalsEvent(data: string): void {
    try {
      if (!data) return;
      if (data.length > 0) {
        this.modelDataList = this.modelDataList.filter((el) =>
          el?.title?.includes(data)
        );
      } else {
        // this.modelDataList = [{ title: 'Model' }];
      }
    } catch (error) { }
  }

  searchHandlerAccordion() { }

  selectedElementOnAccordion(event: CheckBoxInterface) {
    console.log("selected card on accordion", event);
    switch (event.data.type) {
      case "Models":
      case "models":
        if (this.templateSelected !== "CISV") {
          this.assignedElements.models?.map(
            (el) =>
            (el.isChecked =
              event.checked && el.title === event.data.title ? true : false)
          );
          this.assignedElements = Object.assign(
            {},
            JSON.parse(JSON.stringify(this.assignedElements))
          );
          this.selectedModels = [];
        }
        this.helper
          .selectCardEventHandler(event, this.selectedModels)
          .then((res) => {
            console.log("selected res", res);
            this.selectedModels = res;
            this.checkForSelections();
            this.currentTemplateEvent.emit({
              ...JSON.parse(JSON.stringify(this.currentTemplateStatus)),
              ...{
                selectedModels: JSON.parse(JSON.stringify(this.selectedModels)),
              },
            });
            this.updateTaskEvent.emit({
              models:
                JSON.parse(
                  JSON.stringify(
                    (this.assignedElements.models as []).map((t1: Card) => ({
                      ...t1,
                      ...this.selectedModels.find(
                        (t2) => t2.description === (t1 as Card).description
                      ),
                    }))
                  )
                ) || [],
            });
          });
        break;
      case "Parameters":
      case "parameters":
        this.assignedElements.parameters?.map(
          (el) =>
          (el.isChecked =
            event.checked && el.title === event.data.title ? true : false)
        );
        this.assignedElements = Object.assign(
          {},
          JSON.parse(JSON.stringify(this.assignedElements))
        );
        this.selectedParams = [];
        this.helper
          .selectCardEventHandler(event, this.selectedParams)
          .then((res) => {
            console.log("selected res", res);
            this.selectedParams = res;
            this.checkForSelections();
            this.currentTemplateEvent.emit({
              ...JSON.parse(JSON.stringify(this.currentTemplateStatus)),
              ...{
                selectedParams: JSON.parse(JSON.stringify(this.selectedParams)),
              },
            });
            this.updateTaskEvent.emit({
              parameters:
                JSON.parse(
                  JSON.stringify(
                    (this.assignedElements.parameters as []).map(
                      (t1: Card) => ({
                        ...t1,
                        ...this.selectedParams.find(
                          (t2) => t2.description === (t1 as Card).description
                        ),
                      })
                    )
                  )
                ) || [],
            });
          });
        break;
      case "Tests":
      case "tests":
        this.assignedElements.tests?.map(
          (el) =>
          (el.isChecked =
            event.checked && el.title === event.data.title ? true : false)
        );
        this.assignedElements = Object.assign(
          {},
          JSON.parse(JSON.stringify(this.assignedElements))
        );
        this.selectedTests = [];
        this.helper
          .selectCardEventHandler(event, this.selectedTests)
          .then((res) => {
            console.log("selected res", res);
            this.selectedTests = res;
            this.checkForSelections();
            this.currentTemplateEvent.emit({
              ...JSON.parse(JSON.stringify(this.currentTemplateStatus)),
              ...{
                selectedTests: JSON.parse(JSON.stringify(this.selectedTests)),
              },
            });
            this.updateTaskEvent.emit({
              tests:
                JSON.parse(
                  JSON.stringify(
                    (this.assignedElements.tests as []).map((t1: Card) => ({
                      ...t1,
                      ...this.selectedTests.find(
                        (t2) => t2.description === (t1 as Card).description
                      ),
                    }))
                  )
                ) || [],
            });
          });
        break;
      default:
        break;
    }
  }

  checkForSelections() {
    if (this.selectedModels.length !== 0 && this.selectedParams.length !== 0) {
      this.enableSmokeTest = true;
      this.enableCompliance = false;
    } else if (this.selectedModels.length !== 0) {
      this.enableCompliance = true;
      this.enableSmokeTest = false;
    } else {
      this.enableSmokeTest = false;
      this.enableCompliance = false;
    }
  }

  selectedWorkFlowHandler(stepName: string) {
    console.log("this.stepName:", stepName, this.assignedElements);
    this.stepName = stepName;
    this.isConfigCalled = false;
    this.isRunningConsole = false;
    // setTimeout(() => {
    //   if (this.jobId) {
    //     this.JobStatus('Test' as string, this.jobId as string)
    //   }
    // }, 3000)
    if (this.templateSelected !== "CISV") {
      this.resetAllSelections();
      this.selectedModels = [];
      this.selectedParams = [];
    }
    this.fetchAllJobDetails();
    this.jobFetchToTaskEvent.emit({
      stepName,
      taskId: this.selectedTasks[0].id,
    });
    this.jobName = stepName;
    if (this.templateSelected === "CISV") {
      this.CISVWorkflowSteps(stepName);
    } else {
      switch (stepName) {
        case "Compliance Check":
          this.headerText = {
            title: "Compliance Check",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Test Results",
          };
          this.placeHolderInfo = {
            icon: "assets/icons/progress_illustration.svg",
            description: "No tests performed",
          };
          break;
        case "Compatibility Check":
          this.headerText = {
            title: "Compatibility Check",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Test Results",
          };
          this.placeHolderInfo = {
            icon: "assets/icons/progress_illustration.svg",
            description: "No tests performed",
          };
          this.items = [
            {
              label: "Check",
              items: [
                {
                  label: "Compatibility Check",
                  icon: "pi pi-caret-right",
                  command: () => {
                    this.runCompatibleCheck();
                  },
                },
              ],
            },
          ];
          break;
        case "Simulation":
          this.headerText = {
            title: "Simulation",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Test Results",
          };
          this.placeHolderInfo = {
            icon: "assets/icons/progress_illustration.svg",
            description: "No tests performed",
          };
          this.items = [
            {
              label: "simulate",
              items: [
                {
                  label: "Simulation",
                  icon: "pi pi-caret-right",
                  command: () => {
                    this.configForSimulate();
                  },
                },
              ],
            },
          ];
          break;
        case "FMU Compliance & Smoke Test":
          this.headerText = {
            title: "FMU Compliance & Smoke Test",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Test Results",
          };
          this.placeHolderInfo = {
            icon: "assets/icons/progress_illustration.svg",
            description: "No tests performed",
          };
          this.items = [
            {
              label: "Test",
              items: [
                {
                  label: "Compliance check",
                  icon: "pi pi-caret-right",
                  command: () => {
                    this.runComplianceTest();
                  },
                },
                {
                  label: "Smoke Test",
                  icon: "pi pi-caret-right",
                  command: () => {
                    this.runSmokeTest();
                  },
                },
              ],
            },
            {
              label: "Other",
              items: [
                {
                  label: "Open VDI",
                  icon: "pi pi-external-link",
                },
              ],
            },
          ];
          break;
        case "Integration":
          this.headerText = {
            title: "Integration",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Assisted Integration",
          };
          this.placeHolderInfo = {
            icon: "assets/icons/progress_illustration.svg",
            description: "Your integration in progress",
          };
          break;
        case "Recompilation":
          this.headerText = {
            title: "Recompilation",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          this.headerTextResults = {
            title: "Recompilation",
          };
          break;
        case "Diff Test":
          this.headerTextResults = {
            title: "Diff - Testing",
          };
          this.headerText = {
            title: "Diff Test",
            description:
              "You can create a task to assign an elements and configure the same",
          };
          break;
        default:
          break;
      }
    }
  }

  CISVWorkflowSteps(type: string) {
    switch (type) {
      case "Element selection":
        this.headerText = {
          title: "Elements Selection Check",
          description:
            "You can create a task to assign an elements and configure the same",
        };
        this.headerTextResults = {
          title: "Test Results",
        };
        this.placeHolderInfo = {
          icon: "assets/icons/progress_illustration.svg",
          description: "No tests performed",
        };
        this.store.select("store").subscribe((store) => {
          console.log("store subscribed on configurations", store);
          this.assignedElements = JSON.parse(
            JSON.stringify(store?.taskSelectedAsssignedmentElements)
          );
        });
        break;
      case "Compliance Check":
        this.headerText = {
          title: "Compliance Check",
          description:
            "You can create a task to assign an elements and configure the same",
        };
        this.headerTextResults = {
          title: "Test Results",
        };
        this.placeHolderInfo = {
          icon: "assets/icons/progress_illustration.svg",
          description: "No tests performed",
        };
        this.store.select("store").subscribe((store) => {
          console.log("store subscribed on configurations", store);
          this.tasksList = JSON.parse(JSON.stringify(store?.tasksList));
          if ((store?.CISV as { selectedModels: Card[] })?.selectedModels) {
            this.assignedElements.models = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedModels: Card[] })?.selectedModels
              )
            );
            this.selectedModels = this.assignedElements.models as Card[];
          } else {
            this.assignedElements.models = JSON.parse(
              JSON.stringify(
                (store?.taskSelectedAsssignedmentElements as { models: Card[] })
                  ?.models
              )
            );
          }
          if ((store?.CISV as { selectedParams: Card[] })?.selectedParams) {
            this.assignedElements.parameters = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedParams: Card[] })?.selectedParams
              )
            );
            this.selectedParams = this.assignedElements.parameters as Card[];
          } else {
            this.assignedElements.parameters = JSON.parse(
              JSON.stringify(
                (
                  store?.taskSelectedAsssignedmentElements as {
                    parameters: Card[];
                  }
                )?.parameters
              )
            );
          }
          if ((store?.CISV as { selectedTests: Card[] })?.selectedTests) {
            this.assignedElements.tests = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedTests: Card[] })?.selectedTests
              )
            );
            this.selectedTests = this.assignedElements.tests as Card[];
          } else {
            this.assignedElements.tests = JSON.parse(
              JSON.stringify(
                (store?.taskSelectedAsssignedmentElements as { tests: Card[] })
                  ?.tests
              )
            );
          }
        });
        break;
      case "Smoke Test":
        this.headerText = {
          title: "Smoke Test",
          description:
            "You can create a task to assign an elements and configure the same",
        };
        this.headerTextResults = {
          title: "Test Results",
        };
        this.placeHolderInfo = {
          icon: "assets/icons/progress_illustration.svg",
          description: "No tests performed",
        };
        this.items = [
          {
            label: "Test",
            items: [
              {
                label: "Smoke Test",
                icon: "pi pi-caret-right",
                command: () => {
                  this.runSmokeTest();
                },
              },
            ],
          },
        ];
        break;
      case "Simulation":
        this.headerText = {
          title: "Smoke Test",
          description:
            "You can create a task to assign an elements and configure the same",
        };
        this.headerTextResults = {
          title: "Test Results",
        };
        this.placeHolderInfo = {
          icon: "assets/icons/progress_illustration.svg",
          description: "No tests performed",
        };
        this.items = [
          {
            label: "Test",
            items: [
              {
                label: "simulation",
                icon: "pi pi-caret-right",
                command: () => {
                  this.configForSimulate();
                },
              },
            ],
          },
        ];
        this.store.select("store").subscribe((store) => {
          console.log("store subscribed on configurations", store);
          this.tasksList = JSON.parse(JSON.stringify(store?.tasksList));
          if ((store?.CISV as { selectedModels: Card[] })?.selectedModels) {
            this.assignedElements.models = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedModels: Card[] })?.selectedModels
              )
            );
            this.selectedModels = this.assignedElements.models as Card[];
          } else {
            this.assignedElements.models = JSON.parse(
              JSON.stringify(
                (store?.taskSelectedAsssignedmentElements as { models: Card[] })
                  ?.models
              )
            );
          }
          if ((store?.CISV as { selectedParams: Card[] })?.selectedParams) {
            this.assignedElements.parameters = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedParams: Card[] })?.selectedParams
              )
            );
            this.selectedParams = this.assignedElements.parameters as Card[];
          } else {
            this.assignedElements.parameters = JSON.parse(
              JSON.stringify(
                (
                  store?.taskSelectedAsssignedmentElements as {
                    parameters: Card[];
                  }
                )?.parameters
              )
            );
          }
          if ((store?.CISV as { selectedTests: Card[] })?.selectedTests) {
            this.assignedElements.tests = JSON.parse(
              JSON.stringify(
                (store?.CISV as { selectedTests: Card[] })?.selectedTests
              )
            );
            this.selectedTests = this.assignedElements.tests as Card[];
          } else {
            this.assignedElements.tests = JSON.parse(
              JSON.stringify(
                (store?.taskSelectedAsssignedmentElements as { tests: Card[] })
                  ?.tests
              )
            );
          }
        });
        break;
      case "Result":
        this.createCISVObject();
        break;
      default:
        break;
    }
  }

  createCISVObject() {
    console.log("currentTemplateStatus", this.currentTemplateStatus);
    // const fmuFiles: string[] = [];
    // const fmuFilesIds: string[] = [];
    // this.selectedModels.forEach((el: Card) => {
    //   fmuFiles.push(el.apiData?.name as string);
    //   fmuFilesIds.push(el.apiData?.id as string);
    // });
    // // const simFileId = this.selectedParams[0].apiData?.id;
    // const simFile = this.selectedParams[0].apiData?.name as string;
    // const goldenFile = this.selectedTests[0].apiData?.name;
    // const goldenFileId = this.selectedTests[0].apiData?.id;
    // const tasks = (this.currentTemplateStatus as { tasks: {} }).tasks;
    // delete (tasks as { runBatch :boolean}).runBatch
    // console.log(tasks)
    // const CISVReqObj = {
    //   workflow_step: 'Integration',
    //   task_id: this.selectedTasks[0].id,
    //   model_list: fmuFiles,
    //   parameter_set: simFile,
    //   golden_result: goldenFile,
    //   model_list_ids: fmuFilesIds,
    //   exclude_integration: [
    //     'DeDion_thermal_blackBox.fmu'
    //   ],
    //   parameter_set_id: simFileId,
    //   golden_result_id: goldenFileId,
    //   integrated_model: this.modelAdvisor,
    //   tasks: Object.assign((this.currentTemplateStatus as { tasks: {} }).tasks, { runModelSmokeTest: true }),
    //   simulation_options: this.CISVSimulationObj,
    //   fmu_smoke_test_config: this.CISVSmokeTestObj
    // }

    // console.log('total CISV request object created here', CISVReqObj);

    const CISVReqObj = {
      task_id: this.taskID,
      workflow_step: "test",

      tasks: {
        runComplianceCheckFMU: true,

        runSmokeTestFMU: true,

        runModelAdvisorChecks: false,

        runModelSmokeTest: false,

        runIntegration: true,

        runSimulation: true,

        runRegressionTest: true,
      },

      model_list: [
        "cs_fmuInputSelector.fmu",
        "cs_fmuInputSelectorTherm.fmu",
        "Mechanical_V2.fmu",
      ],

      parameter_set: "ZBF_Files_Audi.zip",

      golden_result: "Simulation_Results_audi.csv",

      model_list_ids: ["225384", "225385", "225386"],
      parameter_set_id: "225390",
      golden_result_id: "225394",

      integrated_model: "audi_integrated_model",

      simulation_options: {
        startTime: "0",

        stopTime: "2",

        save_format: "Dataset",

        save_output: "on",

        time_name: "time",

        yout_name: "yout",

        solverType: "Fixed-step",

        abs_tol: "auto",

        initial_timeStep: "auto",

        fixed_timeStep: "0.1",

        solver: "ode4",

        communicationStep: "-1",

        outputStep: "-1",
      },

      fmu_smoke_test_config: {
        stopTime: 10,

        stepSize: 1,

        nDisplayPoints: 1,
      },
    };
    //   workflow_step: 'Integration',
    //   task_id: '34657',
    //   model_list: [
    //     'DeDion_thermal_blackBox.fmu',
    //     'e1_I1_BEV_eSprinter_zbf5dym.fmu'],
    //   parameter_set: 'mars.zip',
    //   golden_result: 'golden.csv',
    //   model_list_ids: [
    //     '180684',
    //     '180645'],
    //   parameter_set_id: '180645',
    //   golden_result_id: '180645',
    //   exclude_integration: [
    //     'DeDion_thermal_blackBox.fmu'
    //   ],
    //   integrated_model: 'integrated_mdl_esprinter',
    //   tasks: {
    //     runComplianceCheckFMU: true,
    //     runSmokeTestFMU: true,
    //     runModelAdvisorChecks: false,
    //     runModelSmokeTest: false,
    //     runIntegration: true,
    //     runSimulation: true,
    //     runRegressionTest: true
    //   },
    //   simulation_options: {
    //     startTime: '0.0',
    //     stopTime: '1.0',
    //     save_format: 'Dataset',
    //     save_output: 'on',
    //     time_name: 'time',
    //     yout_name: 'yout',
    //     solverType: 'Fixed-step',
    //     abs_tol: 'auto',
    //     initial_timeStep: 'auto',
    //     fixed_timeStep: '0.1',
    //     solver: 'ode4',
    //     communicationStep: '-1',
    //     outputStep: '-1'
    //   },
    //   fmu_smoke_test_config: {
    //     stopTime: 0.2,
    //     stepSize: 0.1,
    //     nDisplayPoints: 50
    //   }
    // }
    this.projectService
      .CISVValidation(CISVReqObj)
      .then((res) => {
        if (res) {
          this.jobId = (res as ResponseAPI).data?.jobID as string;
          this.jobIdTemp = (res as ResponseAPI).data?.jobID as string;
          this.JobStatus("Test", (res as ResponseAPI).data?.jobID as string);
        }
      })
      .catch((err) => {
        this.enableLoader.emit(false);
        this.ErrorEvent.emit({
          type: "error",
          message: "There are some issues",
          data: "",
        });
      });
  }

  diffTestSideBarOpen() {
    this.isAssigned = true;
  }

  runComplianceTest() {
    try {
      console.log(this.selectedModels);
      this.enableLoader.emit(true);
      if (this.selectedModels?.length > 0) {
        if (this.enableCompliance) {
          const fmuFiles: string[] = [];
          const fmuFilesIds: string[] = [];
          this.selectedModels.forEach((el: Card) => {
            fmuFiles.push(el.apiData?.name as string);
            fmuFilesIds.push(el.apiData?.id as string);
          });
          const validationData: ComplianceCheck = {
            // task_id: this.selectedTasks[0].id,
            workflow_step: this.stepName,
            fmu_files: fmuFiles,
            fmu_files_ids: fmuFilesIds,
          };
          console.log("request object compliance check", validationData);
          this.projectService
            .validateComplianceCheck(validationData)
            .then((res) => {
              console.log("res for fmu", res);
              if (res) {
                const testresult = res as ResponseAPI;
                // this.resultsOnTable(testresult, fmuFiles);
                this.validationResults.complianceCheck?.push({
                  jobId: testresult.data?.jobID,
                  fmuFiles,
                });
                console.log(
                  "validation results fmu test",
                  this.validationResults
                );
                this.store.dispatch(
                  new LDIGITALActions.CheckConfiguration({
                    checkConfigurationResult: Object.assign(
                      {},
                      JSON.parse(JSON.stringify(this.validationResults))
                    ),
                  })
                );
                // this.selectedModels = [];
                // this.selectedParams = [];
                this.JobStatus(this.stepName, testresult.data?.jobID as string);
              }
            })
            .catch((err) => {
              console.log("error for fmu", err);
              this.enableLoader.emit(false);
              this.ErrorEvent.emit({
                type: "error",
                message: "There are some issues",
                data: "",
              });
            });
          // this.isConfigCalled = true;
        }
      } else {
        console.log("no Models selected");
        this.ErrorEvent.emit({
          type: "error",
          message: "Least select one Model",
          data: "",
        });
      }
    } catch (error) { }
  }

  resultsOnTable(result: ConfigurationActions, fmus: string[]) {
    console.log("results on table", result, fmus);
    let statusIcon = "";
    if (fmus.length > 0) {
      this.cols = [
        { field: "models", header: "Models" },
        { field: "status", header: "Status" },
        { field: "logs", header: "Logs" },
      ];
      if (result.status === "Started" || result.status?.includes("Initiated")) {
        statusIcon = "pi pi-clock text-orange-500";
      } else if (result.status === "Completed") {
        statusIcon = "pi pi-check-circle text-green-500";
      } else {
        statusIcon = "pi pi-times-circle text-red-500";
      }
      fmus.forEach((res: string) => {
        const obj = {
          models: res,
          status: statusIcon,
          logs: "logfile.txt",
        };
        this.products.push(obj);
      });
      this.enableLoader.emit(false);
    }
  }
  // resultsOnTable() {
  //   // expected results
  //   const result = {
  //     status: 'successful',
  //     error: [
  //       {
  //         'fmu_file.fmu': `File doesn't exist`
  //       },
  //       {
  //         'fmu_file.fmu': `File doesn't exist`
  //       }
  //     ],
  //     data: []
  //   }
  //   if (result.error.length > 0) {
  //     result.error.forEach(res => {
  //       const obj = {
  //         models: Object.keys(res)[0],
  //         status: 'success',
  //         logs: 'logfile.txt'
  //       }
  //       this.products.push(obj);
  //     })
  //   }
  // }

  /**
   * compatibility mars
   */
  runCompatibilityTest(): void {
    this.isRunningConsole = true;
  }

  smokeTestFormData() {
    console.log(
      "smoke test form data",
      this.configForm.value,
      this.selectedModels,
      this.selectedParams
    );
    this.enableLoader.emit(true);
    const fmuFiles: string[] = [];
    const fmuFilesIds: string[] = [];
    this.selectedModels.forEach((el: Card) => {
      fmuFiles.push(el.apiData?.name as string);
      fmuFilesIds.push(el.apiData?.id as string);
    });
    const simFileId = this.selectedParams[0].apiData?.id;
    const simFile = this.selectedParams[0].apiData?.name as string;
    const validationData: ComplianceCheck = {
      // task_id: this.selectedTasks[0].id,
      workflow_step: this.stepName,
      fmu_files: fmuFiles,
      fmu_files_ids: fmuFilesIds,
      sim_files: simFile,
      sim_files_id: simFileId,
      simulations: ["mars.sim"],
      start_time: this.configForm.value.startTime,
      stop_time: this.configForm.value.stopTime,
      step_size: this.configForm.value.stepSize,
      output_step_size: this.configForm.value.outputStepSize,
    };
    console.log("request object compliance check", validationData);
    this.projectService
      .validateSmokeTest(validationData)
      .then((res) => {
        if (res) {
          const result = res as ResponseAPI;
          // this.resultsOnSmoke(result, fmuFiles, simFile);
          this.validationResults.smokeTest?.push({
            jobId: result.data?.jobID,
            fmuFiles,
            simFiles: simFile,
          });
          this.store.dispatch(
            new LDIGITALActions.CheckConfiguration({
              checkConfigurationResult: Object.assign(
                {},
                JSON.parse(JSON.stringify(this.validationResults))
              ),
            })
          );
          // this.selectedModels = [];
          // this.selectedParams = [];
          this.JobStatus(this.stepName, result.data?.jobID as string);
        }
      })
      .catch((err) => {
        this.ErrorEvent.emit({
          type: "error",
          message: "There are some issues",
          data: "",
        });
      });
  }

  runSmokeTest() {
    // this.stepName = 'Diff Test';
    if (this.enableSmokeTest) {
      this.isConfigCalled = true;
      this.configForm = new FormGroup({
        stopTime: new FormControl(0, {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.max(10),
            Validators.pattern("^[0-9]*$"),
          ],
        }),
        stepSize: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required, Validators.pattern("^[0-9]*$")],
        }),
        displayPoints: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
      this.cols = [
        { field: "models", header: "Models" },
        { field: "parameters", header: "Parameters" },
        { field: "status", header: "Status" },
        { field: "logs", header: "Logs" },
      ];
      // const obj = {
      //   sim_files: [
      //     {
      //       fmu_files: this.selectedModels,
      //       sim_files: this.selectedParams,
      //       start_time: 0,
      //       stop_time: 0,
      //       step_size: 0,
      //       output_step_size: 0
      //     }
      //   ]
      // }
      // console.log('compliance object', obj);
      // this.resultsOnSmoke();
    }
  }

  sideBarClose() {
    this.isAssigned = false;
  }

  /**
   *
   * @param result
   * @param fmus
   * @param simFile
   */
  resultsOnSmoke(
    result: ConfigurationActions,
    fmus: string[],
    simFile: string
  ) {
    // const result = [
    //   {
    //     status: 'unsuccessful',
    //     error: [
    //       {
    //         'fmu_file.fmu': `File doesn't exist`
    //       },
    //       {
    //         'sim_file.zip': `File doesn't exist`
    //       }
    //     ]
    //   }
    // ]
    let statusIcon = "";
    if (result.status === "Started" || result.status?.includes("Initiated")) {
      statusIcon = "pi pi-clock text-orange-500";
    } else if (result.status === "Completed") {
      statusIcon = "pi pi-check-circle text-green-500";
    } else {
      statusIcon = "pi pi-times-circle text-red-500";
    }
    fmus.forEach((res) => {
      const obj = {
        models: res,
        parameters: simFile,
        status: statusIcon,
        logs: "logfile.txt",
      };
      this.products.push(obj);
    });
    this.enableLoader.emit(false);
  }

  // resultsOnSmoke() {
  //   const result = [
  //     {
  //       status: 'unsuccessful',
  //       error: [
  //         {
  //           'fmu_file.fmu': `File doesn't exist`
  //         },
  //         {
  //           'sim_file.zip': `File doesn't exist`
  //         }
  //       ]
  //     }
  //   ]
  //   if (result[0].error.length > 0) {
  //     result[0].error.forEach(res => {
  //       const obj = {
  //         models: Object.keys(res)[0].split('.')[1] === 'fmu' ? Object.keys(res)[0] : '',
  //         parameters: Object.keys(res)[0].split('.')[1] !== 'fmu' ? Object.keys(res)[0] : '',
  //         status: 'success',
  //         logs: 'logfile.txt'
  //       }
  //       this.products.push(obj);
  //     })
  //   }
  // }
  /**
   *
   * @param e
   */
  marsModelEventHandler(e: boolean): void {
    if (e) {
      this.MarsEventCall.emit(e);
    }
  }

  /**
   * fetch total jobIds created
   */
  fetchAllJobDetails() {
    this.projectService
      .totalJobIds(this.selectedTasks[0].id as string)
      .then((res) => {
        if (res) {
          console.log(
            "total created Job Ids here",
            (res as ResponseAPI).data?.jobs
          );
        }
      })
      .catch((err) => {
        this.ErrorEvent.emit({
          type: "error",
          message: "There are some issues",
          data: "",
        });
      });
  }

  /**
   * Compatible check API here
   */
  runCompatibleCheck() {
    if (this.selectedModels.length === 1 && this.selectedParams.length === 1) {
      this.enableLoader.emit(true);
      const compatibleRequestObj = {
        task_id: this.selectedTasks[0].id,
        workflow_step: this.stepName,
        model: this.selectedModels[0].title,
        zbf_file: this.selectedParams[0].title,
        zbf_file_id: this.selectedParams[0].description,
        sim_file: ["mars.sim"],
      };
      // API call will be here
      this.projectService
        .marsCompatibleCheck(compatibleRequestObj)
        .then((res) => {
          if (res) {
            console.log("response of compatible check", res);
            this.jobId = res.data?.jobID as string;

            this.jobName = "Compatiblity Check";
            this.JobStatus("Compatiblity Check", res.data?.jobID as string);
            this.jobFetchToTaskEvent.emit({
              stepName: this.stepName,
              taskId: this.selectedTasks[0].id,
            });
          }
        })
        .catch((err) => {
          this.ErrorEvent.emit({
            type: "error",
            message: "There are some issues",
            data: "",
          });
        });
    } else {
      this.ErrorEvent.emit({
        type: "error",
        message: "Select one Model and one Parameter",
        data: "",
      });
    }
  }

  /**
   * fetch updated job status
   * @param resultText
   * @param id
   */
  JobStatus(resultText: string, id: string) {
    this.enableLoader.emit(true);
    console.log(resultText, id);
    this.projectService.fetchJobStatus(id).then((res) => {
      if (res) {
        console.log(res);
        const defaultStatus = {
          icon: "assets/icons/inprogress.svg",
          title: resultText + " in progress",
          result: res.data?.result,
          status: 0,
          jobID: this.jobId,
        };
        switch (res.data?.status as string) {
          case "Started":
          case "Queue":
          case "In-progress":
            this.jobResult = defaultStatus;
            break;
          case "Completed":
          case "Successful":
          case "Success":
            this.jobResult = {
              icon: "assets/icons/complete.svg",
              title: resultText + " successful",
              result: res.data?.result,
              status: 1,
              jobID: this.jobId,
            };
            break;
          case "On-Hold":
            this.jobResult = {
              icon: "assets/icons/draft.svg",
              title: resultText + " on hold",
              result: res.data?.result,
              status: 0,
              jobID: this.jobId,
            };
            break;
          case "Failed":
            this.jobResult = {
              icon: "assets/icons/failed.svg",
              title: resultText + " failed",
              result: res.data?.result,
              status: 1,
              jobID: this.jobId,
            };
            break;
          default:
            this.jobResult = defaultStatus;
            break;
        }
        this.isRunningConsole = true;
        this.enableLoader.emit(false);
        this.resetAllSelections();
      }
    });
  }

  configForSimulate() {
    if (
      this.templateSelected === "CISV" &&
      this.selectedModels.length > 0 &&
      this.selectedParams.length === 1
    ) {
      this.isConfigCalled = true;
      this.configForm = new FormGroup({
        startTime: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required, Validators.pattern("^[0-9]*$")],
        }),
        stopTime: new FormControl(0, {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.max(10),
            Validators.pattern("^[0-9]*$"),
          ],
        }),
        saveFormat: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        saveOutput: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        timeName: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        youtName: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        solverType: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        absTol: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        initialTimeStep: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        fixedTimeStep: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        solver: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        communicationStep: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        outputStep: new FormControl(0, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
    } else if (
      this.selectedModels.length === 1 &&
      this.selectedParams.length === 1
    ) {
      this.isConfigCalled = true;
    } else {
      this.ErrorEvent.emit({
        type: "error",
        message: "Select one Model and one Parameter",
        data: "",
      });
    }
  }

  /**
   * simulation test API here
   */
  runSimulation() {
    if (this.configForm.valid) {
      this.isConfigCalled = false;
      if (this.stepName === "Smoke Test" && this.templateSelected === "CISV") {
        console.log("smoke test on CISV form values", this.configForm);
        const obj = {
          stopTime: this.configForm.value.stopTime,
          stepSize: this.configForm.value.stepSize,
          nDisplayPoints: this.configForm.value.displayPoints,
        };
        this.CISVSmokeTestObj = obj;
      } else if (
        this.stepName === "Simulation" &&
        this.templateSelected === "CISV"
      ) {
        console.log("run simulation on CISV", this.configForm.value);
        const obj = {
          startTime: this.configForm.value.startTime,
          stopTime: this.configForm.value.stopTime,
          save_format: this.configForm.value.saveFormat,
          save_output: this.configForm.value.saveOutput,
          time_name: this.configForm.value.timeName,
          yout_name: this.configForm.value.youtName,
          solverType: this.configForm.value.solverType,
          abs_tol: this.configForm.value.absTol,
          initial_timeStep: this.configForm.value.initialTimeStep,
          fixed_timeStep: this.configForm.value.fixedTimeStep,
          solver: this.configForm.value.solver,
          communicationStep: this.configForm.value.communicationStep,
          outputStep: this.configForm.value.outputStep,
        };
        this.CISVSimulationObj = obj;
        console.log("simulation Obj on CISV", this.CISVSimulationObj);
      } else {
        this.enableLoader.emit(true);
        const compatibleRequestObj = {
          task_id: this.selectedTasks[0].id,
          workflow_step: this.stepName,
          model: this.selectedModels[0].title,
          zbf_file: this.selectedParams[0].title,
          zbf_file_id: this.selectedParams[0].description,
          simulations: ["mars.sim"],
          stop_time: this.configForm.value.stopTime,
          process: this.simulateProcessObject,
        };
        // API call will be here
        this.projectService
          .marsSimulate(compatibleRequestObj)
          .then((res) => {
            if (res) {
              console.log("response of compatible check", res);
              this.JobStatus("Simulation", res.data?.jobID as string);
              this.resetConfigForm();
              this.jobFetchToTaskEvent.emit({
                stepName: this.stepName,
                taskId: this.selectedTasks[0].id,
              });
            }
          })
          .catch((err) => {
            this.ErrorEvent.emit({
              type: "error",
              message: "There are some issues",
              data: "",
            });
          });
      }
    }
  }

  resetConfigForm() {
    this.configForm.reset();
    this.simulateProcessObject = {
      write_statistics: false,
      write_famos: false,
      write_sankey: false,
      write_matlab: false,
      write_mf4: false,
      write_csv: false,
      use_timestamp_in_filename: false,
      write_input_file: false,
    };
    this.selectedCategories = [];
  }

  checkboxSelectOnConfig() {
    this.selectedCategories.forEach((el: DynamicCheckBox) => {
      this.simulateProcessObject[el.key] = true;
    });
  }

  resetAllSelections() {
    this.assignedElements.models?.map((el) => (el.isChecked = false));
    this.assignedElements.parameters?.map((el) => (el.isChecked = false));
    this.assignedElements = Object.assign(
      {},
      JSON.parse(JSON.stringify(this.assignedElements))
    );
  }
}
