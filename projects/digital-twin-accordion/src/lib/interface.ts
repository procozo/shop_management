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
}
export interface SubData {
    icon: string;
    count: number;
    title: string;
}

export interface CheckBoxInterface {
    checked: boolean;
    data: Card;
}


export interface AssignedElements {
    models?: Card[];
    parameters?: Card[];
    tests?: Card[]
}