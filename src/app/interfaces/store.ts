import {
  AssignElementsAPI,
  Card,
  ProjectInfo,
  SearchResultAssignElement,
  TaskList,
  ValidateTests,
} from "./project";

export interface LDIGITALStore {
  title?: string;
  notificationList?: Card[];
  assignedElement?: {};
  userInfo?: {};
  searchResult?: SearchResultAssignElement;
  tasksList?: TaskList[];
  totalProjects?: ProjectInfo[];
  projectName?: string;
  projectStep?: number;
  searchMetaData?: AssignElementsAPI;
  projectID?: string;
  httpErrorGlobal?: boolean;
  currentStep?: string;
  templateSelected?: string;
  taskSelectedAsssignedmentElements?: {};
  jobList?: {};
  checkConfigurationResult?: ValidateTests;
  CISV?: {};
  flowData?: {};
  scenarios?: any[];
  pageScenarios?: {};
  programDetails?: {};
}

export interface ConfigStore {
  CISV?: {};
  MARS?: {};
  AIS?: {};
}
export interface AppState {
  store: LDIGITALStore;
}

export interface ConfigState {
  store: ConfigStore;
}
