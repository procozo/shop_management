export interface Card {
    icon?: string;
    title: string;
    titleOpacity?: number;
    count?: number | string;
    description?: string;
    isDelete?: boolean;
    isStatus?: boolean;
    statusValue?: boolean;
    isCreatedAt?: string;
    subData?: SubData[];
    isTest?: boolean;
    isElement?: boolean;
    author?: string;
    version?: string;
    isMultiple?: boolean;
    isExport?: boolean;
    deleteIcon?: string;
    statusHolderIcon?: string;
    iconTitle?: string;
    actionItem?: boolean;
    isChecked?: boolean;
    type?: string;
    isSingleCheckUI?: boolean;
    id?: string;
    apiData?: {};
    workflow?: {}[];
    elementList?: {}
    template?: string;
    isdisabled?: boolean;
}

export interface Header {
    headerProjectName: string;
    isProfile: boolean;
    headerProjectDescription: string;
    isSearchAvailable: boolean;
    isSideNav?: boolean;
    isBorder?: boolean;
    notificationConfig?: {};
    notificationCount?: number;
    icon?: string;
}

export interface SubData {
    icon: string;
    count: number;
    title: string;
}
export interface PlaceHolder {
    title?: string;
    icon?: string;
    description?: string;
    count?: string,
    type?: string,
    value?: [];
}

export interface Project {
    title?: string;
    description?: string;
    isMatched?: boolean;
    projectName?: string;
}

export interface PageConfig {
    isNotification?: boolean;
    notificationsList?: Card[];
    stepNumber?: number;
}

export interface ProjectCreationOptions {
    projectList: Project[];
}

export interface Element {
    title?: string;
    description?: string;
}

export interface AssignedElementConfig {
    elementOptionList?: Element[];
    attributeList?: Element[];
    value?: string;
}

export interface SearchAssignElementConfig {
    elementType?: Element;
    attributeType?: Element;
    value?: string;
}

export interface SearchCategory {
    searchData?: Card[];
    title?: string;
    description?: string;
    placeholderInfo?: PlaceHolder
}

export interface SearchElements {
    searchElementsData?: SearchCategory[];
}

export interface SearchElementsExtend extends SearchCategory {
    searchFilterData?: Card[];
}


export interface AccordionTab {
    title?: string;
    enableCard?: boolean;
    cardData?: Card[];
    enableSearch?: boolean;
    selected?: boolean;
    searchIcon?: string;
    searchInput?: string;
    header?: string;
    disabled?: boolean;
    transitionOptions?: string;
    cache?: boolean;
    filterCardData?: Card[];
    rowsNumber?: number;
    enablePaginate?: boolean;
}



export interface Accordion {
    accordionTab?: AccordionTab[];
    multiple?: boolean;
    style?: string;
    styleClass?: string;
    activeIndex?: string;
    expandIcon?: string;
    collapseIcon?: string;
}

export interface AccordionTabExtend extends AccordionTab {
    filterCardData?: Card[];
    onPageCardData?: Card[];
}

export interface SearchElementConfig {
    title: string;
    description: string;
    placeholderInfo: PlaceHolder
}


export interface SearchResultAssignElement {

    modelList?: Card[];
    paramsList?: Card[];
    testList?: Card[];
    marsModelList?: Card[]

}

// export interface SelectedAssignElement {

//   Models?: Card[];
//   Parameters?: Card[];
//   Tests?: Card[];

// }

export interface CheckBoxInterface {
    checked: boolean;
    type?: string;
    data: Card;
    event: Event;
}
export interface AssignedElements {
    models?: Card[];
    parameters?: Card[];
    tests?: Card[]
}

export interface TasksDropDown {
    title?: string;
    code?: string;
    steps?: {
        title: string,
        code?: string,
        status: boolean,
        menu?: {}
    }[]
}

export interface TasksConfig {
    templates?: TasksDropDown[];
    workflows?: TasksDropDown[];
}

export interface TaskList {
    title?: string;
    id?: string,
    name?: string;
    isCreatedAt?: string;
    description?: string;
    template?: TasksDropDown | string;
    workflow?: TasksDropDown[];
    isAssigned?: boolean;
    assignedElements?: AssignedElements;
    taskName?: string;
    taskID?: string;
    workFlowSteps?: [];
}


export interface TaskListResponse {
    assignTaskRequestData?: {};
    createTaskRequestData?: { template: string };
    createdOn?: string;
    taskName?: string;
    taskID?: string;
    workFlows?: {}[]
}

export interface TestResults {
    models?: string;
    parameters?: string;
    status?: string;
    logs?: string;
}

export interface MultiSelect {
    header?: string;
    field?: string;
}

export interface AssignType {
    objectName?: string;
    id?: string;
}

export interface AssignElementsAPI {
    Models?: AssignType[];
    Parameters?: AssignType[];
    Tests?: AssignType[];
    Parameter?: AssignType[]
}

export interface TasksAPI {
    runsFolderId?: string;
    childTasks?: TaskList[];
}

export interface ResponseConfig {
    totalProjects?: number;
    errorMessage?: string;
    errorCategory?: string;
    projectList?: ProjectInfo[];
    name?: string;
    projectID?: string;
    createdOn?: string;
    projectStage?: string;
    assignedElements?: AssignElementsAPI;
    tasks?: TasksAPI;
    id?: string;
    jobID?: string;
    status?: string;
    jobs?: MetaDataType;
}

export interface ResponseAPI {
    status?: string;
    statusCode?: number;
    data?: ResponseConfig;
    id?: string;
    error?: ResponseConfig;
}

export interface ProjectInfo {
    _id?: string;
    name?: string,
    createdOn?: string,
    status?: string,
    projectStage?: string,
    description?: string
}

export interface MetaDataType {
    [key: string]: string | string[];
}

export interface SearchMetaData {
    Models?: MetaDataType[];
    Parameter?: MetaDataType[];
    Tests?: MetaDataType[];
}

export interface AssignElementPayload {
    models?: MetaDataType[];
    parameters?: MetaDataType[];
    tests?: MetaDataType[];
}

export interface DynamicCheckBox {
    name: string;
    key: keyof ConfigType;
}

export interface ConfigType {
    write_statistics?: boolean,
    write_famos?: boolean,
    write_sankey?: boolean,
    write_matlab?: boolean,
    write_mf4?: boolean,
    write_csv?: boolean,
    use_timestamp_in_filename?: boolean,
    write_input_file?: boolean
}