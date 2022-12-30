import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { MenuItem, MessageService } from "primeng/api";
import { Observable, Subscription } from "rxjs";
import { HelperData } from "src/app/config/constant.data.config";
import { Data } from "src/app/config/data";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { ChangeSchemaService } from "src/app/helpers/utility/change-schema.service";
import { EChartsOption } from "echarts";
import {
  AssignedElementConfig,
  Card,
  Header,
  SearchElements,
  Accordion,
  SearchElementConfig,
  SearchAssignElementConfig,
  AssignedElements,
  TaskList,
  ProjectInfo,
  ResponseAPI,
  AssignElementsAPI,
  AssignElementPayload,
  TasksDropDown,
} from "src/app/interfaces/project";
import { LDIGITALStore, AppState } from "src/app/interfaces/store";
import { ProjectService } from "src/app/services/project/project.service";
import * as LDIGITALActions from "../../actions/lDigital.store.action";
import { ProjectConfigData } from "./ProjectConfig";

export interface PageConfig {
  isNotification: boolean;
  notificationsList?: Card[];
  stepNumber: number;
}

export interface ProjectCreationOptions {
  projectList: ProjectInfo[];
}
export interface Project {
  title: string;
  description?: string;
}

@Component({
  selector: "zf-digital-twin-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
  providers: [ProjectService],
})
export class ProjectComponent implements OnInit {
  chartOption: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  };

  defaultProfileArray!: Card[];
  conditionOptions!: {
    conditionList: Card[];
    conditionMechanismSkeleton?: {
      conditionList: Card[] | undefined;
      isCondition: boolean;
      title: string;
      min: number;
      max: number;
      condition: string;
      topCondition: null;
    }[];
  };
  allProgramAarray!: Card[];
  /** projectCreationOptions */
  projectCreationOptions!: ProjectCreationOptions;
  projectSimulationStepAdvice!: string;
  /**
   * API
   */
  isAPICall = false;

  /** assignElementOption
   */
  assignElementOption!: AssignedElementConfig;
  templateList!: TasksDropDown[];

  public headerOptions: Header | undefined;
  public pageConfig!: PageConfig;

  /**
   * configurations data declarations
   */
  projectName!: string;
  items!: MenuItem[];

  constructor(
    private messageService: MessageService,
    public schema: ChangeSchemaService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private store: Store<AppState>,
    public helperService: LogicHelperService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    try {
      this.defaultProfileArray = [
        {
          title: "Self Achiever",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Self Achiever",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Self Achiever",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Self Achiever",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];

      this.allProgramAarray = [
        {
          title: "Program : PG1234355",
          count_score: 30,
          description: "PG1234355 | 01/09/2022",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Prad",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "Add",
                  icon: "pi pi-refresh",
                  command: () => {},
                },
                {
                  label: "Delete",
                  icon: "pi pi-times",
                  command: () => {},
                },
                {
                  label: "Copy",
                  icon: "pi pi-copy",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Program : PG1234355",
          count_score: 30,
          description: "PG1234355 | 01/09/2022",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Prad",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "Update",
                  icon: "pi pi-refresh",
                  command: () => {},
                },
                {
                  label: "Delete",
                  icon: "pi pi-times",
                  command: () => {},
                },
                {
                  label: "Copy",
                  icon: "pi pi-copy",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Program : PG1234355",
          count_score: 30,
          description: "PG1234355 | 01/09/2022",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Prad",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "Update",
                  icon: "pi pi-refresh",
                  command: () => {},
                },
                {
                  label: "Delete",
                  icon: "pi pi-times",
                  command: () => {},
                },
                {
                  label: "Copy",
                  icon: "pi pi-copy",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Program : PG1234355",
          count_score: 30,
          description: "PG1234355 | 01/09/2022",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Prad",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "Update",
                  icon: "pi pi-refresh",
                  command: () => {},
                },
                {
                  label: "Delete",
                  icon: "pi pi-times",
                  command: () => {},
                },
                {
                  label: "Copy",
                  icon: "pi pi-copy",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];
      /**
       * Assignment elements
       */
      this.templateList = HelperData.data.templateList as TasksDropDown[];

      /**
       * get the data from URL
       */
      this.activeRoute.queryParams.subscribe((param) => {
        this.isAPICall = false;
        console.log(param);
        // this.projectService.getProjectShop(param as {}).then((res) => {
        //   this.isAPICall = false;
        // });
      });

      /**
       * Page
       */

      this.pageConfig = {
        isNotification: false,
        stepNumber: 2,
        notificationsList: [],
      };

      this.conditionOptions = {
        conditionList: [
          {
            title: "Diabetes",
            code: "selectElements",
            status: true,
          },
          {
            title: "Asthma",
            code: "runComplianceCheckFMU",
            status: false,
          },
        ],
        conditionMechanismSkeleton: [],
      };

      /**
       * Store
       */

      this.store.select("store").subscribe((storeData: LDIGITALStore) => {});
    } catch (error) {
      this.showMessage("error", "There are some issues", "");
    }
  }

  /***@notification call
   */

  notificationSubscription(): void {
    this.pageConfig.isNotification = true;
  }

  activateTaskTab(index: number) {
    if (this.projectName) {
      this.pageConfig.stepNumber = index;
    }
  }

  /**
   *
   * @param $event
   */

  createTaskEmmiterHandler($event: {}): void {
    try {
      console.log($event);

      this.projectService
        .createTaskToProject($event as TaskList, "")
        .then((res) => {
          console.log(res, $event);
          this.isAPICall = false;
          if (res) {
            this.showMessage("success", "Task created", "");
          }
        });
    } catch (error) {
      this.showMessage("error", "There are some issues", "");
    }
  }
  /**
   * Message service
   * @param status
   * @param info
   * @param message
   */

  showMessage(status: string, info: string, message: string) {
    console.log(status, info, message);
    // console.log(this..add)
    this.messageService.add({
      severity: status,
      summary: info,
      detail: message,
    });
  }

  /**
   * Loadbar enable/disable
   * @param value
   */
  showLoadBar(value: boolean) {
    this.isAPICall = value;
  }

  /**
   * marsEventCallHandler
   * @param e
   */
  marsEventCallHandler(e: boolean): void {
    console.log("calling models from url");
    // this.submitSearcheventHandler({
    //   data:{
    //     templateType: 'Mars'
    //   }
    // })
    const requestObj = {
      type: "Models",
      templateType: "mars",
    };
  }

  jobFetchEventHandler(e: { taskId: string; stepName: string }) {
    console.log(e);
    this.store.dispatch(
      new LDIGITALActions.UpdateCurrentStep({
        currentStep: e?.stepName as string,
      })
    );
    this.projectService
      .totalJobIds(e.taskId as string)
      .then((res) => {
        if (res) {
          console.log(
            "total created Job Ids here",
            (res as ResponseAPI).data?.jobs
          );
          console.log((res as ResponseAPI).data?.jobs as keyof {});
          this.store.dispatch(
            new LDIGITALActions.UpdateJobDetailsList({
              jobList: (res as ResponseAPI).data?.jobs,
            })
          );
        }
      })
      .catch((err) => {
        this.showMessage("error", "There are some issues", "");
      });
  }

  currentTemplateEventHandler(e: {}) {
    console.log(e);
    this.store.dispatch(
      new LDIGITALActions.UpdateCISV({
        CISV: e as {},
      })
    );
  }

  updateTaskListEventHandler(e: {}) {
    try {
      console.log(e);
      const elements = e as {};
      // Object.keys(elements as {})?.map((el) => {
      //   // console.log((elements as AssignedElements[])?.[el as keyof {}])
      //   ((elements as AssignedElements[])?.[el as keyof {}] as [])?.map((element) => {
      //     console.log(element)
      //     Object.assign(element, { isMultiple: true, isChecked: true, type: el, isSingleCheckUI: true, isDelete: false } as Card)
      //   })
      // })

      console.log(elements);
      this.store.dispatch(
        new LDIGITALActions.UpdateTaskAssignments({
          taskSelectedAsssignedmentElements: elements,
        })
      );
    } catch (error) {}
  }
}
