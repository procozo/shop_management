export interface AssignElementsConfig {
    assignedElementsBlock: {
        title: string;
        description: string;
        elementTitle: string;
        elementPlaceHolder: string;
        templateTitle: string;
        templatePlaceHolder: string;
        attributeTitle: string;
        attributePlaceHolder: string;
        workStepsPlaceHolder: string;
        marsModelInfo: string;
    },
    searchElementsData: {
        selectElementType: {
            header: string;
            placeholder: string;
            elements: {
                title: string;
            }[]
        }
    },
    assignedElementsDataBlock: {
        description: string;
        assignButtonLabel: string;
        deleteButtonLabel: string;

    },
    assignedElementsCards: {
        assignedElementsPlaceholders: {
            modelTitle: string;
            modelDescription: string;
            parametersTitle: string;
            parametersDescription: string;
            testsTitle: string;
            testsDescription: string;
            assignedElementsTitle: string;
        }
    }


}