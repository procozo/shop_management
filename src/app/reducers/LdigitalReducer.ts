import { LDIGITALStore } from "../interfaces/store";
import * as LDIGITALActions from "../actions/lDigital.store.action";
import { Action } from "@ngrx/store";
import { ActionTypes } from "../enums/store";
import { SearchResultAssignElement, TaskList } from "../interfaces/project";
import { Data } from "../config/data";

export type LDIGITALAction = LDIGITALActions.Actions;
export const initialTwinbuilderState: LDIGITALStore = {
  title: "Digital LDIGITAL",
  notificationList: [],
  assignedElement: [],
  userInfo: {},
  searchResult: {},
  // tasksList: Data.tasksData,
  tasksList: [],
  totalProjects: [],
  projectName: "",
  projectStep: 0,
  projectID: "",
  searchMetaData: { Models: [], Parameters: [], Tests: [] },
  httpErrorGlobal: false,
  currentStep: "",
  templateSelected: "",
  taskSelectedAsssignedmentElements: [],
  jobList: {},
  checkConfigurationResult: { complianceCheck: [], smokeTest: [] },
  CISV: {},
  flowData: {},
  scenarios: [],
  pageScenarios: {},
  programDetails: {},
};
export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export const initialState = 0;

const newStateForNotification = (state: LDIGITALStore, newData: [] | {}) => {
  console.log(state.notificationList, newData);
  return [...(state.notificationList as []), ...(newData as [])];
};

const newStateForAssignment = (stateData: {}, newData: {}) => {
  console.log(stateData, newData);
  return {
    ...((stateData as LDIGITALStore).assignedElement as {}),
    ...(newData as LDIGITALStore).assignedElement,
  };
};

const newStateForAssignmentForTasks = (stateData: {}, newData: {}) => {
  console.log(stateData, newData);
  return {
    ...((stateData as LDIGITALStore).taskSelectedAsssignedmentElements as {}),
    ...(newData as LDIGITALStore).taskSelectedAsssignedmentElements,
  };
};

export function LDIGITALReducer(
  state: LDIGITALStore = initialTwinbuilderState,
  action: ActionWithPayload<LDIGITALAction>
) {
  const clonePayload = { ...action.payload };
  const cloneState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.UPDATE_TWIN_STORE:
      return { ...cloneState, action };

    case ActionTypes.ADD_NOTIFICATION:
      return {
        notificationList: [
          ...newStateForNotification(
            cloneState,
            (action.payload as LDIGITALStore).notificationList as []
          ),
        ],
        title: (cloneState as LDIGITALStore).title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState?.projectName,
        searchMetaData: cloneState?.searchMetaData,
        projectID: cloneState.projectID,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.ASSIGN_ELEMENT:
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: newStateForAssignment(
          cloneState,
          clonePayload as LDIGITALStore as {}
        ),
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState?.projectName,
        searchMetaData: cloneState?.searchMetaData,
        projectID: cloneState.projectID,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.TASKS:
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: (action?.payload as LDIGITALStore).tasksList
          ? (action?.payload as LDIGITALStore).tasksList
          : cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState?.projectName,
        searchMetaData: cloneState?.searchMetaData,
        projectID: cloneState.projectID,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.SEARCH_DATA:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: {
          modelList: (action?.payload as LDIGITALStore)?.searchResult?.modelList
            ? (action?.payload as LDIGITALStore)?.searchResult?.modelList
            : cloneState?.searchResult?.modelList,
          paramsList: (action?.payload as LDIGITALStore)?.searchResult
            ?.paramsList
            ? (action?.payload as LDIGITALStore)?.searchResult?.paramsList
            : cloneState?.searchResult?.paramsList,
          testList: (action?.payload as LDIGITALStore)?.searchResult?.testList
            ? (action?.payload as LDIGITALStore)?.searchResult?.testList
            : cloneState?.searchResult?.testList,
          marsModelList: (action?.payload as LDIGITALStore)?.searchResult
            ?.marsModelList
            ? (action?.payload as LDIGITALStore)?.searchResult?.marsModelList
            : cloneState?.searchResult?.marsModelList,
        } as SearchResultAssignElement,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState?.projectName,
        searchMetaData: cloneState?.searchMetaData,
        projectID: cloneState.projectID,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.TOTAL_PROJECTS:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: (action?.payload as LDIGITALStore).totalProjects
          ? (action?.payload as LDIGITALStore).totalProjects
          : cloneState.totalProjects,
        projectName: cloneState?.projectName,
        searchMetaData: cloneState?.searchMetaData,
        projectID: cloneState.projectID,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.PROJECT_CREATE:
      console.log("Create Project");
      console.log(action);
      console.log(cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: (action?.payload as LDIGITALStore).projectName
          ? (action?.payload as LDIGITALStore).projectName
          : cloneState.projectName,
        projectID: (action?.payload as LDIGITALStore).projectID
          ? (action?.payload as LDIGITALStore).projectID
          : cloneState.projectID,
        searchMetaData: cloneState?.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.CREATE_META_DATA:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: (action?.payload as LDIGITALStore).searchMetaData
          ? (action?.payload as LDIGITALStore).searchMetaData
          : cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.ERROR_LOAD:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: (action?.payload as LDIGITALStore).httpErrorGlobal
          ? (action?.payload as LDIGITALStore).httpErrorGlobal
          : cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.CURRENT_STEP:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: (action?.payload as LDIGITALStore).currentStep
          ? (action?.payload as LDIGITALStore).currentStep
          : cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.TEMPLATE:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: (action?.payload as LDIGITALStore).templateSelected
          ? (action?.payload as LDIGITALStore).templateSelected
          : cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.TAST_ASSIGNMENT:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements: newStateForAssignmentForTasks(
          cloneState,
          clonePayload as LDIGITALStore as {}
        ),
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };
    case ActionTypes.JOB_LIST:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: (action?.payload as LDIGITALStore).jobList
          ? (action?.payload as LDIGITALStore).jobList
          : cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.CISV:
      console.log(action, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        CISV: (action?.payload as LDIGITALStore).CISV
          ? (action?.payload as LDIGITALStore).CISV
          : cloneState.CISV,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.CHECK_CONFIGURATION:
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        CISV: cloneState.CISV,
        checkConfigurationResult: (action?.payload as LDIGITALStore)
          .checkConfigurationResult
          ? (action?.payload as LDIGITALStore).checkConfigurationResult
          : cloneState.checkConfigurationResult,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.FLOWDATA:
      console.log(action.payload, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        CISV: cloneState.CISV,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        flowData: (action?.payload as LDIGITALStore).flowData
          ? (action?.payload as LDIGITALStore).flowData
          : cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.SCENATIO:
      console.log(action.payload, cloneState);
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        CISV: cloneState.CISV,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        flowData: cloneState.flowData,
        scenarios: (action?.payload as LDIGITALStore).scenarios
          ? (action?.payload as LDIGITALStore).scenarios
          : cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.PAGESCENATIO:
      console.log(
        "PAGE SCENARIO",
        (action?.payload as LDIGITALStore).pageScenarios
          ? (action?.payload as LDIGITALStore).pageScenarios
          : cloneState.pageScenarios,
        cloneState
      );
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        CISV: cloneState.CISV,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: (action?.payload as LDIGITALStore).pageScenarios
          ? (action?.payload as LDIGITALStore).pageScenarios
          : cloneState.pageScenarios,
        programDetails: cloneState.programDetails,
      };

    case ActionTypes.UPDATEPROGRAM:
      console.log(
        "Progaram SCENARIO",
        (action?.payload as LDIGITALStore).programDetails
          ? (action?.payload as LDIGITALStore).programDetails
          : cloneState.programDetails,
        cloneState
      );
      return {
        notificationList: cloneState.notificationList,
        title: cloneState.title,
        assignedElement: cloneState?.assignedElement,
        userInfo: cloneState.userInfo,
        searchResult: cloneState.searchResult,
        tasksList: cloneState.tasksList,
        totalProjects: cloneState.totalProjects,
        projectName: cloneState.projectName,
        projectID: cloneState.projectID,
        searchMetaData: cloneState.searchMetaData,
        httpErrorGlobal: cloneState.httpErrorGlobal,
        currentStep: cloneState.currentStep,
        templateSelected: cloneState.templateSelected,
        taskSelectedAsssignedmentElements:
          cloneState.taskSelectedAsssignedmentElements,
        jobList: cloneState.jobList,
        CISV: cloneState.CISV,
        checkConfigurationResult: cloneState.checkConfigurationResult,
        flowData: cloneState.flowData,
        scenarios: cloneState.scenarios,
        pageScenarios: cloneState.pageScenarios,
        programDetails: (action?.payload as LDIGITALStore).programDetails
          ? (action?.payload as LDIGITALStore).programDetails
          : cloneState.programDetails,
      };
    default:
      return cloneState;
  }
}
