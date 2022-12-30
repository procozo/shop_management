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
  statusIcon?: string;
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
}

export interface Project {
  title: string;
  description?: string;
  isMatched?: boolean;
}

export interface PageConfig {
  isNotification?: boolean;
  notificationsList?: Card[];
  stepNumber?: number;
  pageId?: number;
}

export interface ProjectCreationOptions {
  projectList: Project[];
}
