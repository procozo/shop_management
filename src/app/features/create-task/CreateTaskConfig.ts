export interface CreateTaskDataInterface {
    createTaskFormData: {
        title: string;
        description: string;
        taskName: string;
        taskNamePlaceholder: string;
        infoIcon: string;
        nameRequired: string;
        specialCharactersNotAllowed: string;
        tasksExists: string;
        projectDescriptionTitle: string;
        projectDescription: string;
        taskTemplateTitle: string;
        taskTemplatePlaceHolder: string;
        taskTemplateRequired: string;
        workFlowStepsTitle: string;
        minFourCharacters: string;
        workFlowStepsPlaceHolder: string;
        workStepsRequired: string;
    },
    tasksList: {
        title: string
        description: string
        assignCommonElements: string;
        noTasksFound: string;
        noTasksDescription: string;
        allTasks: string;
        unassigned: string;
        assigned: string;

        assignedElementsSideBar: {
            title: string;
            description: string;
            buttonTitle: string;
            workFlowInfo: string;
            workFlowDescription: string;
        }
    },

}