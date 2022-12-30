import { Action } from "@ngrx/store";
import { ActionTypes } from "../enums/store";
import { LDIGITALStore } from "../interfaces/store";

export class GetStore implements Action {
  readonly type = ActionTypes.GET_TWIN_STORE;
}
export class UpdateStore implements Action {
  readonly type = ActionTypes.UPDATE_TWIN_STORE;
  constructor(public payload: LDIGITALStore) {}
}
export class AddNotification implements Action {
  readonly type = ActionTypes.ADD_NOTIFICATION;
  constructor(public payload: LDIGITALStore) {}
}

export class AddAssignElement implements Action {
  readonly type = ActionTypes.ASSIGN_ELEMENT;
  constructor(public payload: LDIGITALStore) {}
}

export class AddTaskToStore implements Action {
  readonly type = ActionTypes.TASKS;
  constructor(public payload: LDIGITALStore) {}
}

export class AddSearchResultToStore implements Action {
  readonly type = ActionTypes.SEARCH_DATA;
  constructor(public payload: LDIGITALStore) {}
}

export class TotalProjects implements Action {
  readonly type = ActionTypes.TOTAL_PROJECTS;
  constructor(public payload: LDIGITALStore) {}
}

export class CreateProject implements Action {
  readonly type = ActionTypes.PROJECT_CREATE;
  constructor(public payload: LDIGITALStore) {}
}

export class ProjectStepUpdate implements Action {
  readonly type = ActionTypes.PROJECT_STEP;
  constructor(public payload: LDIGITALStore) {}
}

export class CreateMetaData implements Action {
  readonly type = ActionTypes.CREATE_META_DATA;
  constructor(public payload: LDIGITALStore) {}
}

export class CreateProjectID implements Action {
  readonly type = ActionTypes.PROJECT_ID_CREATION;
  constructor(public payload: LDIGITALStore) {}
}

export class CreateErrorLoad implements Action {
  readonly type = ActionTypes.ERROR_LOAD;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateCurrentStep implements Action {
  readonly type = ActionTypes.CURRENT_STEP;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateSelectedTemplate implements Action {
  readonly type = ActionTypes.TEMPLATE;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateTaskAssignments implements Action {
  readonly type = ActionTypes.TAST_ASSIGNMENT;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateJobDetailsList implements Action {
  readonly type = ActionTypes.JOB_LIST;
  constructor(public payload: LDIGITALStore) {}
}

export class CheckConfiguration implements Action {
  readonly type = ActionTypes.CHECK_CONFIGURATION;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateCISV implements Action {
  readonly type = ActionTypes.CISV;
  constructor(public payload: LDIGITALStore) {}
}

export class FlowDataAction implements Action {
  readonly type = ActionTypes.FLOWDATA;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateScenario implements Action {
  readonly type = ActionTypes.SCENATIO;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdatePageScenario implements Action {
  readonly type = ActionTypes.PAGESCENATIO;
  constructor(public payload: LDIGITALStore) {}
}

export class UpdateProgramDetails implements Action {
  readonly type = ActionTypes.UPDATEPROGRAM;
  constructor(public payload: LDIGITALStore) {}
}
// programDetails;

export type Actions =
  | GetStore
  | UpdateStore
  | AddNotification
  | AddAssignElement
  | AddTaskToStore
  | AddSearchResultToStore
  | TotalProjects
  | CreateProject
  | ProjectStepUpdate
  | CreateMetaData
  | CreateProjectID
  | CreateErrorLoad
  | UpdateCurrentStep
  | UpdateSelectedTemplate
  | UpdateTaskAssignments
  | UpdateJobDetailsList
  | CheckConfiguration
  | UpdateCISV
  | FlowDataAction
  | UpdateScenario
  | UpdatePageScenario
  | UpdateProgramDetails;
