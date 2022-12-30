import { TasksDropDown } from '../interfaces/project';

export class HelperData {
  static data = {
    placeholderData: [
      {
        title: 'models',
        description: '',
        placeholderInfo: {
          title: 'Models',
          description: 'Please select models',
        },
      },
      {
        title: 'parameters',
        description: '',
        placeholderInfo: {
          title: 'Parameters',
          description: 'Please select parameters',
        },
      },
      {
        title: 'tests',
        description: '',
        placeholderInfo: {
          title: 'Tests',
          description: 'Please select tests',
        },
      },
    ],
    accordionData: [
      {
        title: 'Models',
        cardData: [],
        enableSearch: true,
        searchIcon: 'assets/icons/search.svg',
        selected: false,
        enablePaginate: false,
        rowsNumber: 2,
      },
      {
        title: 'Parameters',
        cardData: [],
        enableSearch: true,
        searchIcon: 'assets/icons/search.svg',
        selected: false,
        enablePaginate: false,
        rowsNumber: 2,
      },
      {
        title: 'Tests',
        cardData: [],
        enableSearch: true,
        searchIcon: 'assets/icons/search.svg',
        selected: false,
        enablePaginate: false,
        rowsNumber: 2,
      },
    ],
    templateList: [
      {
        title: 'Mars',
        code: 'mars',
      },
      {
        title: 'Non Mars',
        code: 'non mars',
      },
    ] as TasksDropDown,
  };
  static taskElements = {
    templates: [
      {
        title: 'CISV',
        code: 'CISV',
        steps: [
          {
            title: 'Element selection',
            code: 'selectElements',
            status: true,
          },
          {
            title: 'Compliance Check',
            code: 'runComplianceCheckFMU',
            status: false,
          },
          {
            title: 'Smoke Test',
            code: 'runSmokeTestFMU',
            status: false,
          },
          {
            title: 'Model Advisor',
            code: 'runModelAdvisorChecks',
            status: false,
          },
          {
            title: 'Integration',
            code: 'runIntegration',
            status: false,
          },
          {
            title: 'Simulation',
            code: 'runSimulation',
            status: false,
          },
          {
            title: 'Regression',
            code: 'runRegressionTest',
            status: false,
          },
          {
            title: 'Result',
            code: 'runBatch',
            status: true,
          },
        ],
      },
      {
        title: 'Automatic Integration',
        code: 'Automatic Integration',
        steps: [
          {
            title: 'FMU Compliance & Smoke Test',
            code: 'FMU Compliance & Smoke Test',
            status: true,
          },
          {
            title: 'Simulink Compliance & Smoke Test',
            code: 'Simulink Compliance & Smoke Test',
            status: true,
          },
          {
            title: 'Model Ports Extraction',
            code: 'Model Ports Extraction',
            status: true,
          },
          {
            title: 'Model Ports Mapping',
            code: 'Model Ports Mapping',
            status: true,
          },
          {
            title: 'Automatic Integration in Simulink',
            code: 'Automatic Integration in Simulink',
            status: true,
          },
        ],
      },
      {
        title: 'Assisted Integration',
        code: 'Assisted Integration',
        steps: [
          {
            title: 'FMU Compliance & Smoke Tests',
            code: 'FMU Compliance & Smoke Tests',
            status: true,
          },
          {
            title: 'Model Ports Extraction',
            code: 'Model Ports Extraction',
            status: true,
          },
          {
            title: 'Model Ports Mapping',
            code: 'Model Ports Mapping',
            status: true,
          },
          {
            title: 'Interactive Simulink-on-Cloud (in progress)',
            code: 'Interactive Simulink-on-Cloud (in progress)',
            status: true,
          },
        ],
      },
      {
        title: 'Results Verification',
        code: 'Results Verification',
        steps: [
          {
            title: 'Time-series CSV comparison',
            code: 'Time-series CSV comparison',
            status: true,
          },
        ],
      },
      {
        title: 'FMU Services',
        code: 'FMU Services',
        steps: [
          {
            title: 'FMU Compliance & Smoke Tests',
            code: 'FMU Compliance & Smoke Tests',
            status: false,
          },
          {
            title: 'Model Ports Extraction',
            code: 'Model Ports Extraction',
            status: false,
          },
          {
            title: 'Model Ports Mapping',
            code: 'Model Ports Mapping',
            status: false,
          },
          {
            title: 'FMU Recompilation',
            code: 'FMU Recompilation',
            status: false,
          },
        ],
      },
      {
        title: 'Ports Extraction & Mapping',
        code: 'Ports Extraction & Mapping',
        steps: [
          {
            title: 'Model Ports Extraction',
            code: 'Model Ports Extraction',
            status: false,
          },
          {
            title: 'Model Ports Mapping',
            code: 'Model Ports Mapping',
            status: false,
          },
        ],
      },
      {
        title: 'MARS Efficiency & Loaddata',
        code: 'MARS Efficiency & Loaddata',
        steps: [
          {
            title: 'Compatibility Check',
            code: 'Compatibility Check',
            status: true,
          },
          {
            title: 'Simulation',
            code: 'Simulation',
            status: true,
          },
          {
            title: 'Results Postprocessing (in progress)',
            code: 'Results Postprocessing (in progress)',
            status: true,
          },
          {
            title: 'Result verification',
            code: 'Result verification',
            status: false,
          },
        ],
      },
      {
        title: 'EX-Maps',
        code: 'EX-Maps',
        steps: [
          {
            title: 'Model Configuration (in progress)',
            code: 'Model Configuration (in progress)',
            status: false,
          },
        ],
      },
    ] as TasksDropDown,
  };
  static applicationVariables = {
    // Home section start
    HOME: {
      title: 'LDIGITAL',
      sections: [
        {
          title: 'Home',
        },
        {
          title: 'Contact Us',
        },
        {
          title: 'About Us',
        },
      ],
      description:
        'perform validation, integration, simulation and validation of simulation results perform validation, integration, simulation and validation of simulation results.',
      description2:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum.',
      button: 'get started',
      servicesTitle: 'Services Created',
      numberOfServices: '10000+',
      projectsTitle: 'Projects Created',
      microServicesTitle: 'Micro Services HIts',
      numberOfMicroServices: '300k+',
      overview: [
        {
          title: 'Services Created',
          count: '10000+',
        },
        {
          title: 'Projects Created',
          count: '51',
        },
        {
          title: 'Micro Services HIts',
          count: '300k+',
        },
      ],
      section_what_are_we: {
        heading: 'What we are?',
        title: 'Small description about Shop Management',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum',
        button: 'know more',
        overview: [
          {
            title: 'Services Created',
            count: '10000+',
          },
          {
            title: 'Projects Created',
            count: '51',
          },
          {
            title: 'Micro Services HIts',
            count: '300k+',
          },
        ],
      },

      services: {
        title: 'Services',
        cardsData: [
          {
            icon: 'assets/icons/service_white.svg',
            iconTitle: 'Failed',
            title: 'Re-Compilation Service ',
            count: undefined,
            description: 'You can re-complile windows based FMUs ',
            isDelete: false,
            isStatus: false,
            isCreatedAt: undefined,
            isExport: false,
            subData: [],
            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg',
            actionItem: true,
          },
          {
            icon: 'assets/icons/service_white.svg',
            iconTitle: 'Failed',
            title: 'Re-Compilation Service ',
            count: undefined,
            description: 'You can re-complile windows based FMUs ',
            isDelete: false,
            isStatus: false,
            isCreatedAt: undefined,
            isExport: false,
            subData: [],
            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg',
            actionItem: true,
          },
          {
            icon: 'assets/icons/service_white.svg',
            iconTitle: 'Failed',
            title: 'Re-Compilation Service ',
            count: undefined,
            description: 'You can re-complile windows based FMUs ',
            isDelete: false,
            isStatus: false,
            isCreatedAt: undefined,
            isExport: false,
            subData: [],
            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg',
            actionItem: true,
          },
          {
            icon: 'assets/icons/service_white.svg',
            iconTitle: 'Failed',
            title: 'Re-Compilation Service ',
            count: undefined,
            description: 'You can re-complile windows based FMUs ',
            isDelete: false,
            isStatus: false,
            isCreatedAt: undefined,
            isExport: false,
            subData: [],
            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg',
            actionItem: true,
          },
          {
            icon: 'assets/icons/service_white.svg',
            iconTitle: 'Failed',
            title: 'Re-Compilation Service ',
            count: undefined,
            description: 'You can re-complile windows based FMUs ',
            isDelete: false,
            isStatus: false,
            isCreatedAt: undefined,
            isExport: false,
            subData: [],
            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg',
            actionItem: true,
          },
        ],
      },
      you_are_almost_there: {
        title: 'You are almost there!!',
        description:
          'perform validation, integration, simulation and validation of simulation results perform validation, integration, simulation and validation of simulation results. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis cupiditate nisi ipsam aperiam? Odio quo officiis debitis maxime nisi sint, voluptatem fugiat illum.',
        description2:
          'Nostrud dolore sint dolor laboris elit qui laboris ut mollit do eu minim irure. Id officia duis dolor laboris dolore dolor amet. Eu occaecat amet nisi voluptate sit id minim proident ex sint sunt ad. Do ad voluptate ut aute proident anim sit voluptate ex ipsum non. Sint quis occaecat veniam labore ex est dolore velit sunt. Lorem ad tempor est officia duis mollit occaecat incididunt do exercitation commodo. Fugiat non in aute et nisi nostrud reprehenderit id sit voluptate. Ullamco non veniam excepteur proident et esse eiusmod nisi minim veniam incididunt. Irure fugiat et non sint esse sint dolor aute ad.',
        formOverview: [
          {
            title: 'Name',
            placeholderInfo: 'Please enter your name here',
          },
          {
            title: 'Email',
            placeholderInfo: 'Please enter your email here',
          },
          {
            title: 'Reason',
            placeholderInfo: 'Please enter your reason here',
          },
        ],
        overview: [
          {
            title: 'Services Created',
            count: '10000+',
          },
        ],
        buttonLabel: 'send',
      },
    },
    // Home section end

    // Dashboard section start

    dashboard: {
      navBar: {
        logo: 'assets/icons/logo.svg',
        title: 'LDIGITAL',
        description: 'LDIGITAL application description',
        notificationIcon: 'assets/icons/notification.svg',
        profileIcon: 'assets/icons/profile.svg',
      },
      welcomeBlock: {
        title: 'Welcome back Vinayak !!!',
        createProjectButton: [
          {
            title: 'create new project',
          },
        ],
      },
      overviewBlock: {
        header: 'Overview / Statistics',
        icon: 'assets/icons/service_white.svg',
        title: 'Total projects',
        count: 51,
      },
      recentlyCreatedProjectsBlock: {
        title: 'Recently Created Projects',
        count: 2,
        cardData: [],
      },
      allProjectsBlock: {
        title: 'All Projects | Completed',
        count: 51,
        cardData: [],
      },
    },
    // Dashboard section end

    // create project section start

    createProject: {
      createProjectHeader: {
        logo: 'assets/icons/logo.svg',
        title: 'LDIGITAL',
        description: 'LDIGITAL application description',
        notificationIcon: 'assets/icons/notification.svg',
        profileIcon: 'assets/icons/profile.svg',
      },
      projectTitle: 'Enter Project Name',
      projectTitlePlaceholder: 'Enter Project Name',
      projectDescription: 'Enter Project Description',
      projectDescriptionPlaceholder: 'Enter Project Description',
      invalidName: 'Enter least 3 characters',
      uniqueProjectName: 'Entered project name not available',
      infoIcon: 'assets/icons/info.svg',
      buttonLabel: 'submit',
      uniqueProjectToolTip: 'Provide the unique project name',
      projectDescriptionToolTip: 'Give the small description about the project',
      marsInfo: {
        infoIcon: 'assets/icons/info.svg',
        description:
          'To assign any models to mars you need to search the mars model in the configuration (run task) tab',
      },
      stepsName: [
        {
          title: 'Assigned Elements',
        },
        {
          title: 'Tasks',
        },
        {
          title: 'Configurations',
        },
      ],
    },
    // create project section end

    // Assigned elements section start

    assignedElementsMainBlock: {
      assignedElementsHeader: {
        logo: 'assets/icons/logo.svg',
        title: 'LDIGITAL',
        description: 'LDIGITAL application description',
        notificationIcon: 'assets/icons/notification.svg',
        profileIcon: 'assets/icons/profile.svg',
      },
      createdProjectBlock: {
        header: 'Project Name',
        projectName: 'newProject',
      },
      marsInfo: {
        infoIcon: 'assets/icons/info.svg',
        description:
          'To assign any models to mars you need to search the mars model in the configuration (run task) tab',
      },
      assignedElementsBlock: {
        title: 'Assign files to project',
        description:
          'The process of assigning models, parameters, tests or other files the project selected /created',
        elementTitle: 'Select a category',
        elementPlaceHolder: 'Select a type',
        templateTitle: 'Select the template',
        templatePlaceHolder: 'Select the template',
        attributeTitle: 'Select an attribute',
        attributePlaceHolder: 'Select an attribute',
        workStepsPlaceHolder: 'Select a WorkflowSteps',
        marsModelInfo:
          'Please use mars model directly while assigning the models to respective tasks',
      },

      searchElementsData: {
        selectElementType: {
          header: 'Select Element Type',
          placeholder: 'Select a type',
          elements: [
            {
              title: 'Models',
            },
            {
              title: 'Parameters',
            },
            {
              title: 'Tests',
            },
          ],
        },
        selectAttributeType: {
          header: 'Select an attribute',
          attribute: [
            {
              title: 'Runtime Environment',
            },
            {
              title: 'Design Stage',
            },
            {
              title: 'Capability Level',
            },
            {
              title: 'Product Type',
            },
            {
              title: 'Baseline',
            },
          ],
        },
        enterTheRuntimeEnvironment: {
          header: 'Enter the Runtime Environment',
          placeholder: 'Select a workflowSteps',
          platform: [
            {
              title: 'Win32/64',
            },
          ],
        },
        enterTheDesignStage: {
          header: 'Enter the Design Stage',
          placeholder: 'Select a workflowSteps',
          designs: [
            {
              title: 'ds20',
            },
            {
              title: 'ds10',
            },
          ],
        },
        enterTheDataType: {
          header: 'Enter the Data Type',
          placeholder: 'Select an attribute',
          dataTypes: [
            {
              title: '.fmu',
            },
          ],
        },
        enterTheCapabilityLevel: {
          header: 'Enter the Capability Level',
          placeholder: 'Enter the Capability Level',
        },
        enterTheProductType: {
          header: 'Enter the Product Type',
          placeholder: 'Select a workflowSteps',
          products: [
            {
              title: 'eDrive',
            },
            {
              title: 'electric machineeDrive',
            },
          ],
        },
        enterTheBaseline: {
          header: 'Enter the Baseline',
          placeholder: 'Enter the Baseline',
        },
        button: {
          title: 'find',
          icon: 'assets/icons/search.svg',
        },
      },
      assignedElementsDataBlock: {
        description:
          'Now you can able to select a combination between models / parameters / tests',
        assignButtonLabel: 'Assign',
        deleteButtonLabel: 'Assign',
      },
      assignedElementsCards: {
        sections: [
          {
            title: 'Models',
            count: 0,
          },
          {
            title: 'Parameters',
            count: 0,
          },
          {
            title: 'Tests',
            count: 0,
          },
        ],
        assignedElementsPlaceholders: {
          modelTitle: 'Models',
          modelDescription: 'Please select the models',
          parametersTitle: 'Parameters',
          parametersDescription: 'Please select the parameters',
          testsTitle: 'Tests',
          testsDescription: 'Please select the tests',
          assignedElementsTitle: 'Assigned Files',
          placeholders: [
            {
              title: 'Models',
              description: 'Please select the models',
            },
            {
              title: 'Parameters',
              description: 'Please select the parameters',
            },
            {
              title: 'Tests',
              description: 'Please select the tests',
            },
          ],
        },
        modelsSearchedDataBlock: {
          searchPlaceholder: 'Search here',
          ModelsCard: [],
        },
        parametersSearchedDataBlock: {
          searchPlaceholder: 'Search here',
          ParametersCard: [],
        },
        testsSearchedDataBlock: {
          searchPlaceholder: 'Search here',
          ParametersCard: [],
        },
      },
      stepsNames: [
        {
          title: 'Tasks',
        },
        {
          title: 'Configurations',
        },
      ],
    },
    // Assigned elements section end

    // Create tasks section start

    createTasksMainBlock: {
      createTasksHeader: {
        logo: 'assets/icons/logo.svg',
        title: 'Shop Management',
        description: 'Shop Management application description',
        notificationIcon: 'assets/icons/notification.svg',
        profileIcon: 'assets/icons/profile.svg',
      },
      createdProjectBlock: {
        header: 'Shop Name',
        projectName: 'newProject',
      },
      marsInfo: {
        infoIcon: 'assets/icons/info.svg',
        description:
          'To assign any models to mars you need to search the mars model in the configuration (run task) tab',
      },
      assignedElementsBlock: {
        title: 'Assigned Elements',
        assignedElements: [
          {
            title: 'models',
            count: 2,
          },
          {
            title: 'parameters',
            count: 1,
          },
          {
            title: 'tests',
            count: 2,
          },
        ],
      },
      createTaskFormData: {
        title: 'Create a Shop',
        description: 'You can create a Shop to assign Tanets to the same',
        taskName: 'Enter the Task Name',
        taskNamePlaceholder: 'Enter Task Name',
        infoIcon: 'assets/icons/info.svg',
        nameRequired: 'Name is required',
        minFourCharacters: 'Should have minimum 4 Characters.',
        specialCharactersNotAllowed: 'Special characters not allowed.',
        tasksExists: 'Run already created.',
        projectDescriptionTitle: 'Enter Project Description',
        projectDescription: 'Enter Run Description',
        taskTemplateTitle: 'Select Run Template',
        taskTemplatePlaceHolder: 'Select a Template',
        taskTemplateRequired: 'Run template is required.',
        workFlowStepsTitle: 'Select Run Actions',
        workFlowStepsPlaceHolder: 'Select Run Actions',
        workStepsRequired: 'Run Action is required',
        buttonTitle: 'create',
      },

      tasksList: {
        title: 'Shop List',
        description:
          'You can create a task to asign an elements and configure the same',
        assignCommonElements: 'Assign Common Elements',
        noTasksFound: 'No Task Found',
        noTasksDescription: 'Please create the task',
        allTasks: 'All Tasks',
        unassigned: 'Unassigned',
        assigned: 'Assigned',

        createdTasksData: [
          // Data of created tasks
        ],
        assignedElementsSideBar: {
          title: 'Task selected',
          count: 1,
          description:
            'You can start assigning the application level elements now',
          buttonTitle: 'Assign to task',
          workFlowInfo: 'Workflow Information',
          workFlowDescription:
            'You can start assigning the application level elements now',

          elements: [
            {
              title: 'parameters',
            },
            {
              title: 'tests',
            },
            {
              title: 'models',
            },
          ],
        },
      },
      section: {
        title: 'Configurations',
      },
    },
    // Create tasks section end

    // Configuration section start

    configurationMainBlockData: {
      toolTipActions: 'Configuration Actions',
      testingTypeTitle: 'Select Testing Type',
      infoIcon: 'assets/icons/info.svg',
      aliasName: 'Enter Alias Name',
      selectGoldenResult: 'Selected golden result file',
      selectReference: 'Please select any reference file',
      selectSimulatedFiles: 'Selected simulated files',
      runConfigTitle: 'Set the Run Configurations',
      runConfigDescription:
        'This configuration helps run to handle the proper data integration and testing',
      startTime: 'Start Time',
      endTime: 'End Time',
      timingPlaceHolder: '0.00 seconds',
      selectedMarsModels: 'Selected Mars Models',
      selectedMarsParameters: 'Selected Mars Parameters ',
      setRunConfig: 'Set the Run Configurations',
      createTasksHeader: {
        logo: 'assets/icons/logo.svg',
        title: 'LDIGITAL',
        description: 'LDIGITAL application description',
        notificationIcon: 'assets/icons/notification.svg',
        profileIcon: 'assets/icons/profile.svg',
      },
      createdProjectBlock: {
        header: 'Project Name',
        projectName: 'newProject',
      },
      marsInfo: {
        infoIcon: 'assets/icons/info.svg',
        description:
          'To assign any models to mars you need to search the mars model in the configuration (run task) tab',
      },
      assignedElementsBlock: {
        title: 'Assign Files',
        assignedElements: [
          {
            title: 'models',
            count: 2,
          },
          {
            title: 'parameters',
            count: 1,
          },
          {
            title: 'tests',
            count: 2,
          },
        ],
      },
      createdTasksBlock: {
        title: 'Tasks | non-mars tasks',
        assignedElements: [
          {
            title: 'models',
            count: 2,
          },
          {
            title: 'parameters',
            count: 1,
          },
          {
            title: 'tests',
            count: 2,
          },
        ],
      },
      workflowStepsBlock: {
        title: 'Workflow Steps',
        workflowSteps: [
          {
            title: 'Automatic Integration',
            code: 'Automatic Integration',
            steps: [
              {
                title: 'FMU Compliance & Smoke Test',
                code: 'FMU Compliance & Smoke Test',
                status: true,
              },
              {
                title: 'Simulink Compliance & Smoke Test',
                code: 'Simulink Compliance & Smoke Test',
                status: true,
              },
              {
                title: 'Model Ports Extraction',
                code: 'Model Ports Extraction',
                status: true,
              },
              {
                title: 'Model Ports Mapping',
                code: 'Model Ports Mapping',
                status: true,
              },
              {
                title: 'Automatic Integration in Simulink',
                code: 'Automatic Integration in Simulink',
                status: true,
              },
            ],
          },
          {
            title: 'Assisted Integration',
            code: 'Assisted Integration',
            steps: [
              {
                title: 'FMU Compliance & Smoke Tests',
                code: 'FMU Compliance & Smoke Tests',
                status: true,
              },
              {
                title: 'Model Ports Extraction',
                code: 'Model Ports Extraction',
                status: true,
              },
              {
                title: 'Model Ports Mapping',
                code: 'Model Ports Mapping',
                status: true,
              },
              {
                title: 'Interactive Simulink-on-Cloud (in progress)',
                code: 'Interactive Simulink-on-Cloud (in progress)',
                status: true,
              },
            ],
          },
          {
            title: 'Results Verification',
            code: 'Results Verification',
            steps: [
              {
                title: 'Time-series CSV comparison',
                code: 'Time-series CSV comparison',
                status: true,
              },
            ],
          },
          {
            title: 'FMU Services',
            code: 'FMU Services',
            steps: [
              {
                title: 'FMU Compliance & Smoke Tests',
                code: 'FMU Compliance & Smoke Tests',
                status: false,
              },
              {
                title: 'Model Ports Extraction',
                code: 'Model Ports Extraction',
                status: false,
              },
              {
                title: 'Model Ports Mapping',
                code: 'Model Ports Mapping',
                status: false,
              },
              {
                title: 'FMU Recompilation',
                code: 'FMU Recompilation',
                status: false,
              },
            ],
          },
          {
            title: 'Ports Extraction & Mapping',
            code: 'Ports Extraction & Mapping',
            steps: [
              {
                title: 'Model Ports Extraction',
                code: 'Model Ports Extraction',
                status: false,
              },
              {
                title: 'Model Ports Mapping',
                code: 'Model Ports Mapping',
                status: false,
              },
            ],
          },
          {
            title: 'MARS Efficiency & Loaddata',
            code: 'MARS Efficiency & Loaddata',
            steps: [
              {
                title: 'Compatibility Check',
                code: 'Compatibility Check',
                status: true,
              },
              {
                title: 'Simulation',
                code: 'Simulation',
                status: true,
              },
              {
                title: 'Results Postprocessing (in progress)',
                code: 'Results Postprocessing (in progress)',
                status: true,
              },
              {
                title: 'Result verification',
                code: 'Result verification',
                status: false,
              },
            ],
          },
          {
            title: 'EX-Maps',
            code: 'EX-Maps',
            steps: [
              {
                title: 'Model Configuration (in progress)',
                code: 'Model Configuration (in progress)',
                status: false,
              },
            ],
          },
        ],
      },
      assignedElementsDataBlock: {
        section: [
          {
            title: 'models',
            modelsData: [
              // Models card data
            ],
          },
          {
            title: 'parameters',
            parametersData: [
              // parameters card data
            ],
          },
          {
            title: 'tests',
            testsData: [
              // tests card data
            ],
          },
        ],
      },
    },
    topNavMainBlock: {
      workFlowTitle: 'Workflow Steps',
    },
    searchComponent: {
      inputPlaceholder: 'Search here...',
    },
    projectComponent: {
      projectName: 'Project Name :',
      marsInfoToAssign:
        'To assign any models to mars you need to search the mars model in the configuration(run task) tab',
      assignedElementsTitle: 'Assigned Elements',
      configurationTitle: 'Configurations',
    },
    // Configuration section end
  };

  static marsData = {
    data: [
      {
        name: 'e1_C1_FCEV',
        display_name: 'BEV, 1 EM, 1 gear, fuel Cell',
        description:
          'Complete model e1_C1_FCEV, displayed as BEV, 1 EM, 1 gear, fuel Cell, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_FeVD_Efficiency',
        display_name:
          'BEV, 1 EM, 1 gear, PE as FMU, THM, losses battery, FeVD Efficiency',
        description:
          'Complete model e1_C1_FeVD_Efficiency, displayed as BEV, 1 EM, 1 gear, PE as FMU, THM, losses battery, FeVD Efficiency, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_eSprinter',
        display_name: 'BEV, 1 EM, 1 gear, THM as FMU for eSprinter',
        description:
          'Complete model e1_C1_BEV_eSprinter, displayed as BEV, 1 EM, 1 gear, THM as FMU for eSprinter, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_THM_1D_2DU_Lotus',
        display_name: 'BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery',
        description:
          'Complete model e2_C2_THM_1D_2DU_Lotus, displayed as BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery, with 10 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_noBat',
        display_name: 'BEV, 1 EM, 1 gear, infinite battery',
        description:
          'Complete model e1_C1_BEV_noBat, displayed as BEV, 1 EM, 1 gear, infinite battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_noBat_opt',
        display_name: 'BEV, 1 EM, 1 gear (total loss), infinite battery',
        description:
          'Complete model e1_C1_BEV_noBat_opt, displayed as BEV, 1 EM, 1 gear (total loss), infinite battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV',
        display_name: 'BEV, 1 EM, losses battery',
        description:
          'Complete model e1_C1_BEV, displayed as BEV, 1 EM, losses battery, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e1_C1_BEV_AEM',
        display_name: 'BEV, 1 EM (FMU), losses battery',
        description:
          'Complete model e1_C1_BEV_AEM, displayed as BEV, 1 EM (FMU), losses battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_slip',
        display_name: 'BEV, 1 EM, losses battery - tire slip model',
        description:
          'Complete model e1_C1_BEV_slip, displayed as BEV, 1 EM, losses battery - tire slip model, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_PEfmu',
        display_name: 'BEV, 1 EM, losses battery, FMU Power electronics model',
        description:
          'Complete model e1_C1_BEV_PEfmu, displayed as BEV, 1 EM, losses battery, FMU Power electronics model, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_brkThmExt',
        display_name: 'BEV with external brake model (1 Brake)',
        description:
          'Complete model e1_C1_BEV_brkThmExt, displayed as BEV with external brake model (1 Brake), with 9 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_brk2ThmExt',
        display_name: 'BEV, with external brake (two brake models)',
        description:
          'Complete model e1_C1_BEV_brk2ThmExt, displayed as BEV, with external brake (two brake models), with 10 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_brkThm',
        display_name:
          'BEV, 1 EM, 1 gear, losses battery, thermal model of brake discs',
        description:
          'Complete model e1_C1_BEV_brkThm, displayed as BEV, 1 EM, 1 gear, losses battery, thermal model of brake discs, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_RtResistance',
        display_name: 'BEV with external (Route input) driving resistances',
        description:
          'Complete model e1_C1_BEV_RtResistance, displayed as BEV with external (Route input) driving resistances, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_BEV_gears_noBat',
        display_name: 'BEV, 1 EM, multiple gears, infinite battery',
        description:
          'Complete model e1_C16_BEV_gears_noBat, displayed as BEV, 1 EM, multiple gears, infinite battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_BEV_gears',
        display_name: 'BEV, 1 EM, multiple gears, losses battery',
        description:
          'Complete model e1_C16_BEV_gears, displayed as BEV, 1 EM, multiple gears, losses battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_BEV_gears_rtResistance',
        display_name:
          'BEV, 1 EM, multiple gears, losses battery, external (Route input) driving resistances',
        description:
          'Complete model e1_C16_BEV_gears_rtResistance, displayed as BEV, 1 EM, multiple gears, losses battery, external (Route input) driving resistances, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_FCEV_gears',
        display_name: 'BEV, 1 EM, multiple gears, losses FC+battery',
        description:
          'Complete model e1_C16_FCEV_gears, displayed as BEV, 1 EM, multiple gears, losses FC+battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_FCEVcompr_gears',
        display_name: 'BEV, 1 EM, multiple gears, losses FC+compressor+battery',
        description:
          'Complete model e1_C16_FCEVcompr_gears, displayed as BEV, 1 EM, multiple gears, losses FC+compressor+battery, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C16_BEV_gears_opt',
        display_name:
          'BEV, 1 EM, multiple gears, losses battery - reduced complexity for optimization',
        description:
          'Complete model e1_C16_BEV_gears_opt, displayed as BEV, 1 EM, multiple gears, losses battery - reduced complexity for optimization, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_freeDriver',
        display_name: 'BEV, 1 EM, free driver',
        description:
          'Complete model e1_C1_BEV_freeDriver, displayed as BEV, 1 EM, free driver, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_dimOmLoss2DU',
        display_name:
          'BEV, 2 EM, disconnect, losses battery, losses with CalEta interface 4',
        description:
          'Complete model e2_C2_dimOmLoss2DU, displayed as BEV, 2 EM, disconnect, losses battery, losses with CalEta interface 4, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_dimOmLoss2DU_dummyBAT',
        display_name:
          'BEV, 2 EM, disconnect, ideal battery, losses with CalEta interface 4',
        description:
          'Complete model e2_C2_dimOmLoss2DU_dummyBAT, displayed as BEV, 2 EM, disconnect, ideal battery, losses with CalEta interface 4, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_compLoss2DU',
        display_name:
          'BEV, 2 EM, disconnect, losses battery, component losses with Caleta interface 3 or earlier',
        description:
          'Complete model e2_C2_compLoss2DU, displayed as BEV, 2 EM, disconnect, losses battery, component losses with Caleta interface 3 or earlier, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_AWD',
        display_name: 'BEV, 2 EM, AWD with disconnect',
        description:
          'Complete model e2_C2_AWD, displayed as BEV, 2 EM, AWD with disconnect, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C2_compLoss2DU_dummyBAT',
        display_name:
          'BEV, 2 EM, disconnect, infinite battery, component losses with Caleta interface 3 or earlier',
        description:
          'Complete model e2_C2_compLoss2DU_dummyBAT, displayed as BEV, 2 EM, disconnect, infinite battery, component losses with Caleta interface 3 or earlier, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e2_C16_BEV_awd_gears',
        display_name: 'BEV, 2 EM, multiple gears, AWD, infinite battery',
        description:
          'Complete model e2_C16_BEV_awd_gears, displayed as BEV, 2 EM, multiple gears, AWD, infinite battery, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_AudiPPE',
        display_name: 'BEV, 1 EM, losses battery, INV-FMU-Perf AudiPPE',
        description:
          'Complete model e1_C1_BEV_AudiPPE, displayed as BEV, 1 EM, losses battery, INV-FMU-Perf AudiPPE, with 10 submodels',
        excluded: true,
      },
      {
        name: '_h2_C16_P2_xEV_MARS_THM',
        display_name: 'xEV P2-Hyb, only GBX, THM and MLO',
        description:
          'InComplete model _h2_C16_P2_xEV_MARS_THM, displayed as xEV P2-Hyb, only GBX, THM and MLO, with 3 submodels',
        excluded: false,
      },
      {
        name: '_h2_C16_P2_xEV_MARS_noTHM',
        display_name: 'xEV P2-Hyb, only GBX and MLO',
        description:
          'InComplete model _h2_C16_P2_xEV_MARS_noTHM, displayed as xEV P2-Hyb, only GBX and MLO, with 2 submodels',
        excluded: false,
      },
      {
        name: '_h2_C16_P2_xEV_MARS_THM_pdata',
        display_name: 'xEV P2-Hyb, only GBX, THM (pdata) and MLO',
        description:
          'InComplete model _h2_C16_P2_xEV_MARS_THM_pdata, displayed as xEV P2-Hyb, only GBX, THM (pdata) and MLO, with 3 submodels',
        excluded: false,
      },
      {
        name: 'h2_C16_P2',
        display_name:
          'P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy',
        description:
          'Complete model h2_C16_P2, displayed as P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, with 9 submodels',
        excluded: true,
      },
      {
        name: 'h2_C16_P4',
        display_name:
          'P4-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy',
        description:
          'Complete model h2_C16_P4, displayed as P4-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, with 9 submodels',
        excluded: true,
      },
      {
        name: 'h2_C16_P2_TC',
        display_name:
          'P2-Hyb, 1 EM, launching clutch + torque converter,\trealistic battery, rule based strategy',
        description:
          'Complete model h2_C16_P2_TC, displayed as P2-Hyb, 1 EM, launching clutch + torque converter,\trealistic battery, rule based strategy, with 9 submodels',
        excluded: true,
      },
      {
        name: 'h2_C16_P2_thermal',
        display_name:
          'P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, components for thermal integration',
        description:
          'InComplete model h2_C16_P2_thermal, displayed as P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, components for thermal integration, with 9 submodels',
        excluded: false,
      },
      {
        name: 'h2_C16_P1',
        display_name:
          'P1-Hyb, 1 EM, torque converter,\trealistic battery, rule based strategy',
        description:
          'Complete model h2_C16_P1, displayed as P1-Hyb, 1 EM, torque converter,\trealistic battery, rule based strategy, with 9 submodels',
        excluded: true,
      },
      {
        name: '_h2_C16_P2_PDK2evo',
        display_name: 'PDK2evo loss calculation',
        description:
          'InComplete model _h2_C16_P2_PDK2evo, displayed as PDK2evo loss calculation, with 2 submodels',
        excluded: false,
      },
      {
        name: 'c1_C16_conv_CL',
        display_name: 'ICE, clutch, gearbox powerlosses',
        description:
          'Complete model c1_C16_conv_CL, displayed as ICE, clutch, gearbox powerlosses, with 8 submodels',
        excluded: true,
      },
      {
        name: 'c1_C16_conv_TC',
        display_name: 'ICE, torque converter, gearbox powerlosses',
        description:
          'Complete model c1_C16_conv_TC, displayed as ICE, torque converter, gearbox powerlosses, with 8 submodels',
        excluded: true,
      },
      {
        name: 'c1_C16_conv_TC_EL58',
        display_name:
          'ICE, torque converter, gearbox powerlosses, mech. oil pump, EL58 thermal model',
        description:
          'Complete model c1_C16_conv_TC_EL58, displayed as ICE, torque converter, gearbox powerlosses, mech. oil pump, EL58 thermal model, with 9 submodels',
        excluded: true,
      },
      {
        name: 'c1_C16_conv_TC_EL58_Debug',
        display_name: 'Debug EL58',
        description:
          'InComplete model c1_C16_conv_TC_EL58_Debug, displayed as Debug EL58, with 8 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_turbo_CL',
        display_name: 'ICE turbo, clutch, gearbox powerlosses',
        description:
          'Complete model _c1_C16_conv_turbo_CL, displayed as ICE turbo, clutch, gearbox powerlosses, with 8 submodels',
        excluded: false,
      },
      {
        name: 'c1_C16_conv_turbo_TC',
        display_name: 'ICE turbo, torque converter, gearbox powerlosses',
        description:
          'Complete model c1_C16_conv_turbo_TC, displayed as ICE turbo, torque converter, gearbox powerlosses, with 8 submodels',
        excluded: true,
      },
      {
        name: 'e2_I2_Lotus_noTHM',
        display_name:
          'BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery, onlyMARS, noTHM',
        description:
          'InComplete model e2_I2_Lotus_noTHM, displayed as BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery, onlyMARS, noTHM, with 9 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_BEV_wheelInputs',
        display_name:
          'BEV, 1 EM, 1 gear, losses battery, user inputs at wheels',
        description:
          'InComplete model e1_I1_BEV_wheelInputs, displayed as BEV, 1 EM, 1 gear, losses battery, user inputs at wheels, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_BEV_duInputs',
        display_name: 'BEV, 1 EM, 1 gear, losses battery, user inputs at EM',
        description:
          'InComplete model e1_I1_BEV_duInputs, displayed as BEV, 1 EM, 1 gear, losses battery, user inputs at EM, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e2_I2_BEV_wheelInputs',
        display_name:
          'BEV, 2 EM, 1 gear, losses battery, user inputs at wheels',
        description:
          'InComplete model e2_I2_BEV_wheelInputs, displayed as BEV, 2 EM, 1 gear, losses battery, user inputs at wheels, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_EMpBAT',
        display_name: '1EM + losses battery, user inputs at EM',
        description:
          'InComplete model e1_I1_EMpBAT, displayed as 1EM + losses battery, user inputs at EM, with 5 submodels',
        excluded: false,
      },
      {
        name: 'THM_1D_2DU',
        display_name:
          'BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery, onlyTHM, noMARS',
        description:
          'InComplete model THM_1D_2DU, displayed as BEV, 2 EM, 1 gear, THM_1D for 1EM, losses battery, onlyTHM, noMARS, with 1 submodels',
        excluded: false,
      },
      {
        name: 'BAT_only',
        display_name: 'standalone battery model',
        description:
          'InComplete model BAT_only, displayed as standalone battery model, with 1 submodels',
        excluded: false,
      },
      {
        name: 'THM_1D',
        display_name: '1D_THM',
        description:
          'InComplete model THM_1D, displayed as 1D_THM, with 1 submodels',
        excluded: false,
      },
      {
        name: 'c1_I16_conv_TC_EL58',
        display_name:
          'ICE, torque converter, gearbox powerlosses, mech. oil pump, no thermal model',
        description:
          'InComplete model c1_I16_conv_TC_EL58, displayed as ICE, torque converter, gearbox powerlosses, mech. oil pump, no thermal model, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_BEV_eSprinter',
        display_name: 'BEV, 1 EM, 1 gear, only MARS part for eSprinter',
        description:
          'InComplete model e1_I1_BEV_eSprinter, displayed as BEV, 1 EM, 1 gear, only MARS part for eSprinter, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_BEV_ZE3',
        display_name: 'BEV, 1 EM, 1 gear, losses battery, project ZE3',
        description:
          'InComplete model e1_I1_BEV_ZE3, displayed as BEV, 1 EM, 1 gear, losses battery, project ZE3, with 7 submodels',
        excluded: false,
      },
      {
        name: '_e2_C2_dimOmLoss2DU_comp',
        display_name:
          'BEV, 2 EM, disconnect, losses battery, component losses with caleta v4',
        description:
          'Complete model _e2_C2_dimOmLoss2DU_comp, displayed as BEV, 2 EM, disconnect, losses battery, component losses with caleta v4, with 10 submodels',
        excluded: false,
      },
      {
        name: '_h2_C16_P2_dimOMLoss_ruleBased',
        display_name:
          'P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, total losses with caleta v4',
        description:
          'Complete model _h2_C16_P2_dimOMLoss_ruleBased, displayed as P2-Hyb, 1 EM, launching clutch,\trealistic battery, rule based strategy, total losses with caleta v4, with 10 submodels',
        excluded: false,
      },
      {
        name: '_e2_I16_DHT_test',
        display_name: 'Incomplete_e2I16DHTtest',
        description:
          'InComplete model _e2_I16_DHT_test, displayed as Incomplete_e2I16DHTtest, with 9 submodels',
        excluded: false,
      },
      {
        name: '_e1_I1_noDRV_STY_ELO',
        display_name: 'Incomplete_e1I1noDRVSTYELO',
        description:
          'InComplete model _e1_I1_noDRV_STY_ELO, displayed as Incomplete_e1I1noDRVSTYELO, with 6 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part1',
        display_name: 'ICE, clutch, gearbox powerlosses, everything else',
        description:
          'InComplete model _c1_C16_conv_CL_part1, displayed as ICE, clutch, gearbox powerlosses, everything else, with 7 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part11',
        display_name:
          'ICE, clutch, gearbox powerlosses, engine, gbx, mlo, thm, vehicle',
        description:
          'InComplete model _c1_C16_conv_CL_part11, displayed as ICE, clutch, gearbox powerlosses, engine, gbx, mlo, thm, vehicle, with 5 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part111',
        display_name: 'ICE, clutch, gearbox powerlosses, engine, gbx, mlo, thm',
        description:
          'InComplete model _c1_C16_conv_CL_part111, displayed as ICE, clutch, gearbox powerlosses, engine, gbx, mlo, thm, with 4 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part1111',
        display_name: 'ICE, clutch, gearbox powerlosses, engine, gearbox',
        description:
          'InComplete model _c1_C16_conv_CL_part1111, displayed as ICE, clutch, gearbox powerlosses, engine, gearbox, with 2 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part1112',
        display_name: 'ICE, clutch, gearbox powerlosses, only mlo, thm',
        description:
          'InComplete model _c1_C16_conv_CL_part1112, displayed as ICE, clutch, gearbox powerlosses, only mlo, thm, with 2 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part112',
        display_name: 'ICE, clutch, gearbox powerlosses, vehicle',
        description:
          'InComplete model _c1_C16_conv_CL_part112, displayed as ICE, clutch, gearbox powerlosses, vehicle, with 1 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part12',
        display_name: 'ICE, clutch, gearbox powerlosses, battery and elo',
        description:
          'InComplete model _c1_C16_conv_CL_part12, displayed as ICE, clutch, gearbox powerlosses, battery and elo, with 2 submodels',
        excluded: false,
      },
      {
        name: '_c1_C16_conv_CL_part2',
        display_name: 'ICE, clutch, gearbox powerlosses, driver and strategy',
        description:
          'InComplete model _c1_C16_conv_CL_part2, displayed as ICE, clutch, gearbox powerlosses, driver and strategy, with 2 submodels',
        excluded: false,
      },
      {
        name: '_e1_I1_VSEDE',
        display_name: 'Incomplete_1EM_BEV_VSEDE',
        description:
          'InComplete model _e1_I1_VSEDE, displayed as Incomplete_1EM_BEV_VSEDE, with 7 submodels',
        excluded: false,
      },
      {
        name: 'DUE_totalLoss_only',
        display_name: 'Electric machine only (Testing for I-Div applications)',
        description:
          'InComplete model DUE_totalLoss_only, displayed as Electric machine only (Testing for I-Div applications), with 1 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_VE61P',
        display_name: 'Function Development model for VE61P',
        description:
          'InComplete model e2_I3_VE61P, displayed as Function Development model for VE61P, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PI10',
        display_name: 'Function Development Model for PI10',
        description:
          'InComplete model e2_I3_PI10, displayed as Function Development Model for PI10, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_AX318',
        display_name: 'Function Development Model for AX318',
        description:
          'InComplete model e1_I3_AX318, displayed as Function Development Model for AX318, with 6 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_CX318',
        display_name: 'Function Development Model for CX318',
        description:
          'InComplete model e1_I3_CX318, displayed as Function Development Model for CX318, with 6 submodels',
        excluded: false,
      },
      {
        name: 'e2_I2_2DU',
        display_name: 'Function Development Model for axle drive with 2DU',
        description:
          'InComplete model e2_I2_2DU, displayed as Function Development Model for axle drive with 2DU, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_AX318_noBat',
        display_name: 'Function Development Model for AX318 - no battery model',
        description:
          'InComplete model e1_I3_AX318_noBat, displayed as Function Development Model for AX318 - no battery model, with 5 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_CX318_noBat',
        display_name: 'Function Development Model for CX318 - no battery model',
        description:
          'InComplete model e1_I3_CX318_noBat, displayed as Function Development Model for CX318 - no battery model, with 5 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_VE61P_noBat',
        display_name: 'Function Development model for VE61P (no battery model)',
        description:
          'InComplete model e2_I3_VE61P_noBat, displayed as Function Development model for VE61P (no battery model), with 6 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PI10_noBat',
        display_name: 'Function Development Model for PI10 (no battery model)',
        description:
          'InComplete model e2_I3_PI10_noBat, displayed as Function Development Model for PI10 (no battery model), with 6 submodels',
        excluded: false,
      },
      {
        name: 'e2_I2_2DU_noBat',
        display_name:
          'Function Development Model for axle drive with 2DU (no battery model)',
        description:
          'InComplete model e2_I2_2DU_noBat, displayed as Function Development Model for axle drive with 2DU (no battery model), with 6 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_AX318_PTonly',
        display_name: 'Function Development Model for AX318 - only powertrain',
        description:
          'InComplete model e1_I3_AX318_PTonly, displayed as Function Development Model for AX318 - only powertrain, with 4 submodels',
        excluded: false,
      },
      {
        name: 'e1_I3_CX318_PTonly',
        display_name: 'Function Development Model for CX318 - only powertrain',
        description:
          'InComplete model e1_I3_CX318_PTonly, displayed as Function Development Model for CX318 - only powertrain, with 4 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_VE61P_PTonly',
        display_name: 'Function Development model for VE61P (only powertrain)',
        description:
          'InComplete model e2_I3_VE61P_PTonly, displayed as Function Development model for VE61P (only powertrain), with 5 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PI10_PTonly',
        display_name: 'Function Development Model for PI10 (powertrain only)',
        description:
          'InComplete model e2_I3_PI10_PTonly, displayed as Function Development Model for PI10 (powertrain only), with 5 submodels',
        excluded: false,
      },
      {
        name: 'e2_I2_2DU_PTonly',
        display_name:
          'Function Development Model for axle drive with 2DU (powertrain only)',
        description:
          'InComplete model e2_I2_2DU_PTonly, displayed as Function Development Model for axle drive with 2DU (powertrain only), with 5 submodels',
        excluded: false,
      },
      {
        name: 'e1_I1_VehicleOnly',
        display_name:
          'Just a vehicle model, for simple vehicle model switches within PI10 project',
        description:
          'InComplete model e1_I1_VehicleOnly, displayed as Just a vehicle model, for simple vehicle model switches within PI10 project, with 1 submodels',
        excluded: false,
      },
      {
        name: 'c1_I36_JDMX',
        display_name: 'Function Development model for JDMX',
        description:
          'InComplete model c1_I36_JDMX, displayed as Function Development model for JDMX, with 3 submodels',
        excluded: false,
      },
      {
        name: 'e3_I_tractor_driveLine',
        display_name: 'Tractor Driveline model for I-Div',
        description:
          'InComplete model e3_I_tractor_driveLine, displayed as Tractor Driveline model for I-Div, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I_eTP_axle',
        display_name: 'eTP axle model for I-Div',
        description:
          'InComplete model e2_I_eTP_axle, displayed as eTP axle model for I-Div, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PaccarDerating_MARS_THMfmu',
        display_name: 'Derating Paccar with THM',
        description:
          'InComplete model e2_I3_PaccarDerating_MARS_THMfmu, displayed as Derating Paccar with THM, with 4 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PaccarDerating_MARS_only',
        display_name: 'Derating Paccar noTHM',
        description:
          'InComplete model e2_I3_PaccarDerating_MARS_only, displayed as Derating Paccar noTHM, with 3 submodels',
        excluded: false,
      },
      {
        name: 'e2_I3_PaccarDerating_MARS_THM',
        display_name: 'Derating Paccar THM from saveTotal',
        description:
          'InComplete model e2_I3_PaccarDerating_MARS_THM, displayed as Derating Paccar THM from saveTotal, with 4 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev',
        display_name: 'SimDev - BEV2EM',
        description:
          'InComplete model e2_I16_SimDev, displayed as SimDev - BEV2EM, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_slip',
        display_name: 'SimDev - BEV2EM - slip',
        description:
          'InComplete model e2_I16_SimDev_slip, displayed as SimDev - BEV2EM - slip, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_FC',
        display_name: 'SimDev - FCEV2EM',
        description:
          'InComplete model e2_I16_SimDev_FC, displayed as SimDev - FCEV2EM, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_FCcompres',
        display_name: 'SimDev - BEV2EM_FCcompres',
        description:
          'InComplete model e2_I16_SimDev_FCcompres, displayed as SimDev - BEV2EM_FCcompres, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_THM',
        display_name: 'SimDev - BEV2EM_Thm2Du2Pe',
        description:
          'InComplete model e2_I16_SimDev_THM, displayed as SimDev - BEV2EM_Thm2Du2Pe, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_THM_minimal',
        display_name: 'SimDev - BEV2EM_Thm2Du2Pe - no bat, drv, veh, sty',
        description:
          'InComplete model e2_I16_SimDev_THM_minimal, displayed as SimDev - BEV2EM_Thm2Du2Pe - no bat, drv, veh, sty, with 5 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_pumpOnly',
        display_name: 'SimDev - pump only',
        description:
          'InComplete model e2_I16_SimDev_pumpOnly, displayed as SimDev - pump only, with 1 submodels',
        excluded: false,
      },
      {
        name: 'e2_I16_SimDev_THM_INV',
        display_name: 'SimDev - BEV2EM_Thm2Du2Inv',
        description:
          'InComplete model e2_I16_SimDev_THM_INV, displayed as SimDev - BEV2EM_Thm2Du2Inv, with 8 submodels',
        excluded: false,
      },
      {
        name: 'e2_I15_SimDev_eds',
        display_name: 'SimDev - BEV2EM_Thm2Du2Inv_eds',
        description:
          'InComplete model e2_I15_SimDev_eds, displayed as SimDev - BEV2EM_Thm2Du2Inv_eds, with 9 submodels',
        excluded: false,
      },
      {
        name: 'e2_I15_CX336_eds',
        display_name: 'SimDev - CX336 EDS',
        description:
          'InComplete model e2_I15_CX336_eds, displayed as SimDev - CX336 EDS, with 10 submodels',
        excluded: false,
      },
      {
        name: 'THM_inverse_PSM',
        display_name: '1D_THM + DUE for AxPa2',
        description:
          'InComplete model THM_inverse_PSM, displayed as 1D_THM + DUE for AxPa2, with 7 submodels',
        excluded: false,
      },
      {
        name: 'THM_inverse_ASM',
        display_name: '1D_THM + ASM_DUE',
        description:
          'InComplete model THM_inverse_ASM, displayed as 1D_THM + ASM_DUE, with 7 submodels',
        excluded: false,
      },
      {
        name: 'e1_C1_EvSys800',
        display_name: 'BEV, 1 EM, 1 gear, THM, project EvSys800',
        description:
          'Complete model e1_C1_EvSys800, displayed as BEV, 1 EM, 1 gear, THM, project EvSys800, with 9 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_BEV20',
        display_name: 'BEV, 2 EM, losses battery, BEV20',
        description:
          'Complete model e1_C1_BEV_BEV20, displayed as BEV, 2 EM, losses battery, BEV20, with 10 submodels',
        excluded: true,
      },
      {
        name: 'e1_C1_BEV_Cetrax',
        display_name: 'BEV, 2 EM, losses battery, CetraxLite',
        description:
          'Complete model e1_C1_BEV_Cetrax, displayed as BEV, 2 EM, losses battery, CetraxLite, with 9 submodels',
        excluded: true,
      },
    ],
    error: {
      message: null,
      info: null,
    },
  };

  static modelDataINtegration = {
    models: [],
  };
  static dummyData = {
    notificationList: [
      {
        icon: 'assets/icons/failed.svg',
        iconTitle: 'Failed',
        title: 'Testing_twin_builder_data_011',
        description: 'Failed Sanity testing',
        isCreatedAt: '12/12/12',
      },
    ],
    title: 'Digital LDIGITAL',
    assignedElement: {
      models: [
        {
          title: 'simpleMath_zbf_noSrc_euler.fmu',
          description: '159825',
          apiData: {
            name: 'simpleMath_zbf_noSrc_euler.fmu',
            id: '159825',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'Model_Compile.fmu',
          description: '161077',
          apiData: {
            name: 'Model_Compile.fmu',
            id: '161077',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'cs_fmuInputSelector.fmu',
          description: '225384',
          apiData: {
            name: 'cs_fmuInputSelector.fmu',
            id: '225384',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'cs_fmuInputSelectorTherm.fmu',
          description: '225385',
          apiData: {
            name: 'cs_fmuInputSelectorTherm.fmu',
            id: '225385',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'Mechanical_V2.fmu',
          description: '225386',
          apiData: {
            name: 'Mechanical_V2.fmu',
            id: '225386',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'thermal_V2_1.fmu',
          description: '226011',
          apiData: {
            name: 'thermal_V2_1.fmu',
            id: '226011',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'OilFlowManager_V2_2.fmu',
          description: '226030',
          apiData: {
            name: 'OilFlowManager_V2_2.fmu',
            id: '226030',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'Derating_V2.fmu',
          description: '226008',
          apiData: {
            name: 'Derating_V2.fmu',
            id: '226008',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Models',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
      ],
      parameters: [
        {
          title: 'e1_C1_BEV_eqc.zip',
          description: '218207',
          apiData: {
            name: 'e1_C1_BEV_eqc.zip',
            id: '218207',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Parameters',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'ZBF_Files_Audi.zip',
          description: '225390',
          apiData: {
            name: 'ZBF_Files_Audi.zip',
            id: '225390',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Parameters',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
      ],
      tests: [
        {
          title: 'goldenResult_Int_MARS_THM.csv',
          description: '192498',
          apiData: {
            name: 'goldenResult_Int_MARS_THM.csv',
            id: '192498',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Tests',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
        {
          title: 'GoldenResults.csv',
          description: '226016',
          apiData: {
            name: 'GoldenResults.csv',
            id: '226016',
          },
          isMultiple: true,
          isDelete: true,
          type: 'Tests',
          isSingleCheckUI: true,
          deleteIcon: 'assets/icons/delete.svg',
        },
      ],
    },
    userInfo: {},
    searchResult: {},
    tasksList: [
      {
        title: 'CISV',
        workflow: [
          {
            title: 'Compliance Check',
            code: 'Compliance Check',
          },
          {
            title: 'Smoke Test',
            code: 'Smoke Test',
          },
          {
            title: 'Model Advisor',
            code: 'Model Advisor',
          },
          {
            title: 'Integration',
            code: 'Integration',
          },
          {
            title: 'Simulation',
            code: 'Simulation',
          },
          {
            title: 'Regression',
            code: 'Regression',
          },
          {
            title: 'Result',
            code: 'Result',
          },
        ],
        isCreatedAt: '2022-09-19T05:28:10Z',
        template: 'CISV',
        description: '34514',
        id: '34514',
        assignedElements: {
          models: [
            {
              title: 'simpleMath_zbf_noSrc_euler.fmu',
              description: '159825',
              apiData: {
                name: 'simpleMath_zbf_noSrc_euler.fmu',
                id: '159825',
              },
            },
            {
              title: 'Model_Compile.fmu',
              description: '161077',
              apiData: {
                name: 'Model_Compile.fmu',
                id: '161077',
              },
            },
          ],
          parameters: [
            {
              title: 'e1_C1_BEV_eqc.zip',
              description: '218207',
              apiData: {
                name: 'e1_C1_BEV_eqc.zip',
                id: '218207',
              },
            },
          ],
          tests: [
            {
              title: 'goldenResult_Int_MARS_THM.csv',
              description: '192498',
              apiData: {
                name: 'goldenResult_Int_MARS_THM.csv',
                id: '192498',
              },
            },
          ],
        },
        isAssigned: true,
      },
      {
        title: 'asdasd',
        workflow: [
          {
            title: 'Element selection',
            code: 'Element selection',
          },
          {
            title: 'Compliance Check',
            code: 'Compliance Check',
          },
          {
            title: 'Smoke Test',
            code: 'Smoke Test',
          },
          {
            title: 'Model Advisor',
            code: 'Model Advisor',
          },
          {
            title: 'Integration',
            code: 'Integration',
          },
          {
            title: 'Simulation',
            code: 'Simulation',
          },
          {
            title: 'Regression',
            code: 'Regression',
          },
          {
            title: 'Result',
            code: 'Result',
          },
        ],
        isCreatedAt: '2022-09-19T05:31:27Z',
        template: 'CISV',
        description: '34557',
        id: '34557',
        assignedElements: {
          models: [
            {
              title: 'simpleMath_zbf_noSrc_euler.fmu',
              description: '159825',
              apiData: {
                name: 'simpleMath_zbf_noSrc_euler.fmu',
                id: '159825',
              },
            },
            {
              title: 'Model_Compile.fmu',
              description: '161077',
              apiData: {
                name: 'Model_Compile.fmu',
                id: '161077',
              },
            },
          ],
          parameters: [
            {
              title: 'e1_C1_BEV_eqc.zip',
              description: '218207',
              apiData: {
                name: 'e1_C1_BEV_eqc.zip',
                id: '218207',
              },
            },
          ],
          tests: [
            {
              title: 'goldenResult_Int_MARS_THM.csv',
              description: '192498',
              apiData: {
                id: '192498',
                name: 'goldenResult_Int_MARS_THM.csv',
                description: '',
              },
            },
          ],
        },
        isAssigned: true,
      },
      {
        title: 'CISV3',
        workflow: [
          {
            title: 'Element selection',
            code: 'Element selection',
          },
          {
            title: 'Compliance Check',
            code: 'Compliance Check',
          },
          {
            title: 'Smoke Test',
            code: 'Smoke Test',
          },
          {
            title: 'Model Advisor',
            code: 'Model Advisor',
          },
          {
            title: 'Integration',
            code: 'Integration',
          },
          {
            title: 'Simulation',
            code: 'Simulation',
          },
          {
            title: 'Regression',
            code: 'Regression',
          },
          {
            title: 'Result',
            code: 'Result',
          },
        ],
        isCreatedAt: '2022-09-19T09:59:52Z',
        template: 'CISV',
        description: '34608',
        id: '34608',
        assignedElements: {
          models: [
            {
              title: 'simpleMath_zbf_noSrc_euler.fmu',
              description: '159825',
              apiData: {
                name: 'simpleMath_zbf_noSrc_euler.fmu',
                id: '159825',
              },
            },
            {
              title: 'Model_Compile.fmu',
              description: '161077',
              apiData: {
                name: 'Model_Compile.fmu',
                id: '161077',
              },
            },
          ],
          parameters: [
            {
              title: 'e1_C1_BEV_eqc.zip',
              description: '218207',
              apiData: {
                name: 'e1_C1_BEV_eqc.zip',
                id: '218207',
              },
            },
          ],
          tests: [
            {
              title: 'goldenResult_Int_MARS_THM.csv',
              description: '192498',
              apiData: {
                name: 'goldenResult_Int_MARS_THM.csv',
                id: '192498',
              },
            },
          ],
        },
        isAssigned: true,
      },
      {
        title: 'CISV4',
        workflow: [
          {
            title: 'Element selection',
            code: 'Element selection',
          },
          {
            title: 'Compliance Check',
            code: 'Compliance Check',
          },
          {
            title: 'Smoke Test',
            code: 'Smoke Test',
          },
          {
            title: 'Model Advisor',
            code: 'Model Advisor',
          },
          {
            title: 'Integration',
            code: 'Integration',
          },
          {
            title: 'Simulation',
            code: 'Simulation',
          },
          {
            title: 'Regression',
            code: 'Regression',
          },
          {
            title: 'Result',
            code: 'Result',
          },
        ],
        isCreatedAt: '2022-09-19T10:30:58Z',
        template: 'CISV',
        description: '34657',
        id: '34657',
        assignedElements: {
          models: [
            {
              title: 'simpleMath_zbf_noSrc_euler.fmu',
              description: '159825',
              apiData: {
                id: '159825',
                name: 'simpleMath_zbf_noSrc_euler.fmu',
                description: 'Simple Math ZBF FMU',
              },
            },
            {
              title: 'Model_Compile.fmu',
              description: '161077',
              apiData: {
                id: '161077',
                name: 'Model_Compile.fmu',
                description: '',
              },
            },
            {
              title: 'cs_fmuInputSelector.fmu',
              description: '225384',
              apiData: {
                name: 'cs_fmuInputSelector.fmu',
                id: '225384',
              },
            },
            {
              title: 'cs_fmuInputSelectorTherm.fmu',
              description: '225385',
              apiData: {
                name: 'cs_fmuInputSelectorTherm.fmu',
                id: '225385',
              },
            },
            {
              title: 'Mechanical_V2.fmu',
              description: '225386',
              apiData: {
                name: 'Mechanical_V2.fmu',
                id: '225386',
              },
            },
            {
              title: 'thermal_V2_1.fmu',
              description: '226011',
              apiData: {
                id: '226011',
                name: 'thermal_V2_1.fmu',
                description: '',
              },
            },
            {
              title: 'Derating_V2.fmu',
              description: '226008',
              apiData: {
                id: '226008',
                name: 'Derating_V2.fmu',
                description: '',
              },
            },
          ],
          parameters: [
            {
              title: 'e1_C1_BEV_eqc.zip',
              description: '218207',
              apiData: {
                name: 'e1_C1_BEV_eqc.zip',
                id: '218207',
              },
            },
            {
              title: 'ZBF_Files_Audi.zip',
              description: '225390',
              apiData: {
                name: 'ZBF_Files_Audi.zip',
                id: '225390',
              },
            },
          ],
          tests: [
            {
              title: 'goldenResult_Int_MARS_THM.csv',
              description: '192498',
              apiData: {
                name: 'goldenResult_Int_MARS_THM.csv',
                id: '192498',
              },
            },
            {
              title: 'GoldenResults.csv',
              description: '226016',
              apiData: {
                id: '226016',
                name: 'GoldenResults.csv',
                description: '',
              },
            },
          ],
        },
        isAssigned: true,
      },
      {
        title: 'CISVDemo6',
        workflow: [
          {
            title: 'Element selection',
            code: 'Element selection',
          },
          {
            title: 'Compliance Check',
            code: 'Compliance Check',
          },
          {
            title: 'Smoke Test',
            code: 'Smoke Test',
          },
          {
            title: 'Model Advisor',
            code: 'Model Advisor',
          },
          {
            title: 'Integration',
            code: 'Integration',
          },
          {
            title: 'Simulation',
            code: 'Simulation',
          },
          {
            title: 'Regression',
            code: 'Regression',
          },
          {
            title: 'Result',
            code: 'Result',
          },
        ],
        isCreatedAt: '2022-09-20T07:00:28Z',
        template: 'CISV',
        description: '34954',
        id: '34954',
        assignedElements: {
          models: [],
          parameters: [],
          tests: [],
        },
        isAssigned: false,
      },
    ],
    totalProjects: [
      {
        _id: '35533',
        name: 'MARS2',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T09:33:02Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35507',
        name: 'Test2',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T09:26:56Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35480',
        name: 'Test2',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T09:06:17Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '35474',
        name: 'Test2',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T09:06:16Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35468',
        name: 'Test2',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T09:06:15Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '35442',
        name: 'MARS_TEST',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-28T08:48:56Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35274',
        name: 'Christoph_Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-27T12:31:11Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35257',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-09-27T07:23:20Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35251',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-09-27T05:06:34Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '35187',
        name: 'PI10',
        description: 'BEV eDrive Truck Bus',
        createdOn: '2022-09-21T07:26:57Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35115',
        name: 'techconclave',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-20T08:50:34Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '35052',
        name: 'techConclave',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-20T07:36:29Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34795',
        name: 'CISVT',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-20T06:13:17Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34724',
        name: 'CISVpro',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-20T04:41:18Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34718',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-19T15:30:36Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '34712',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-19T15:26:07Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '34506',
        name: 'CISVProject',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-19T05:27:31Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34362',
        name: 'CISV',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-19T03:48:47Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34293',
        name: 'TownHallExample',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-16T06:34:09Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34287',
        name: 'Simulation_Project_16_1',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-09-16T05:21:48Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '34258',
        name: 'MARS_Test1',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-15T07:10:09Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34046',
        name: 'marspi08',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T06:42:21Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '34020',
        name: 'marstestPI09',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T05:21:25Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33975',
        name: 'marsFlow',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T05:04:24Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33949',
        name: 'marsTest09',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T04:54:16Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33904',
        name: 'marsProject',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T04:38:27Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33858',
        name: 'marsIntegration',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-13T03:55:13Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33679',
        name: 'marsProject',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-12T08:49:28Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33645',
        name: 'create_project_mars',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-12T08:01:08Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33312',
        name: 'new_mars_project',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-08T09:10:22Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33185',
        name: 'newProject',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-07T09:02:33Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '33108',
        name: 'new data',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-07T06:43:55Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32924',
        name: 'hgfggfj',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-05T15:20:29Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32841',
        name: 'test123',
        description: 'demo',
        createdOn: '2022-09-05T11:38:40Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32814',
        name: 'demo unit',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-05T09:34:21Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32650',
        name: 'fsdfsdfsdf',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-05T08:30:33Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32588',
        name: 'test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-05T07:18:41Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '32582',
        name: 'new enewe ',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-05T07:03:54Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32559',
        name: 'dasdasdsd',
        description: 'dasdasd',
        createdOn: '2022-09-05T06:43:04Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32470',
        name: 'Project name',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-09-01T06:06:33Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32452',
        name: 'Test1',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-29T10:14:14Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32425',
        name: 'Project_demo_review',
        description: 'description',
        createdOn: '2022-08-29T08:03:32Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32218',
        name: 'data',
        description: 'data',
        createdOn: '2022-08-29T05:32:36Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '32094',
        name: 'Project3',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-24T06:59:20Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31905',
        name: 'dasdasd',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-23T07:37:17Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31892',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-23T05:15:35Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31886',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-23T05:15:02Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31880',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-23T05:15:00Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31852',
        name: 'hbjh',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-23T04:32:46Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31775',
        name: 'TBuilder',
        description: 'TB',
        createdOn: '2022-08-22T10:33:25Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '31714',
        name: 'pro_1',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-22T10:10:20Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31662',
        name: 'recent_data_to_demo',
        description: 'description',
        createdOn: '2022-08-22T06:46:09Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31656',
        name: 'sdfsdff',
        description: 'dasd',
        createdOn: '2022-08-19T11:51:10Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31643',
        name: 'asfascasd',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-19T10:45:45Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '31609',
        name: 'Project_Created_Fr DeMo',
        description: 'Description',
        createdOn: '2022-08-19T10:42:57Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31594',
        name: 'data_project',
        description: 'data',
        createdOn: '2022-08-19T10:38:40Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31581',
        name: 'project_ent_to_end',
        description: 'data',
        createdOn: '2022-08-19T10:28:29Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '31469',
        name: 'New Project',
        description: 'New Desc',
        createdOn: '2022-08-19T10:16:32Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31389',
        name: 'Created_dummy_data',
        description: 'descriptipok ',
        createdOn: '2022-08-19T08:16:40Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31335',
        name: 'Dummy_Ui_data_1001',
        description: 'Description',
        createdOn: '2022-08-18T09:55:37Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31327',
        name: 'bjkshdjks',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-18T09:35:14Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '31280',
        name: 'Dummy_UI_data',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-18T09:01:33Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31274',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-18T08:46:43Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31268',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-18T08:45:16Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '31259',
        name: 'Test',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-18T08:08:17Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30947',
        name: 'twin_builder_demo_project_2',
        description: 'a small project',
        createdOn: '2022-08-18T04:08:54Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '30940',
        name: 'dasraer',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T10:02:24Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30934',
        name: 'project_q42342',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T10:01:25Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30928',
        name: 'dummy_project',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T10:00:55Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30922',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-17T10:00:03Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30916',
        name: 'jhdjkshfkjhskdjf',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T09:58:38Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30910',
        name: 'hgkhgghj',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T09:47:21Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30904',
        name: 'zcczxc',
        description: 'Simulation Project Created using Twin Model Builder ',
        createdOn: '2022-08-17T08:40:53Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30898',
        name: 'enum_data',
        description: 'dasdasd',
        createdOn: '2022-08-17T07:24:24Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30892',
        name: 'project data',
        description: 'dasda',
        createdOn: '2022-08-17T07:13:05Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30886',
        name: 'jhjkhk',
        description: 'hghjgj',
        createdOn: '2022-08-17T07:09:35Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30867',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-16T10:00:10Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30861',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-16T10:00:06Z',
        projectStage: 'Draft',
        status: 'Enabled',
      },
      {
        _id: '30839',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-16T08:50:15Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '30817',
        name: 'Test_Simulation_Project',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-16T07:19:02Z',
        projectStage: 'In Progress',
        status: 'Enabled',
      },
      {
        _id: '30776',
        name: 'Test_Simulation_Project1',
        description: 'Simulation Project created using Twin Model Builder',
        createdOn: '2022-08-15T19:38:27Z',
        projectStage: 'In Progress',
        status: 'Disabled',
      },
    ],
    projectName: 'CISVProject',
    projectID: '34506',
    searchMetaData: {
      Models: [
        {
          'Runtime Environment': ['Win32/64'],
          attrType: 'multiSelect',
        },
        {
          'Design Stage': ['ds20', 'ds10'],
          attrType: 'multiSelect',
        },
        {
          'Data Type': ['.slx', '.fmu'],
          attrType: 'singleSelect',
        },
        {
          'Capability Level': '',
          attrType: 'str',
        },
        {
          'Product Type': ['eDrive', 'electric machineeDrive'],
          attrType: 'multiSelect',
        },
        {
          Baseline: '',
          attrType: 'str',
        },
        {
          Author: '',
          attrType: 'str',
        },
        {
          Domain: ['thermal', 'mechanical'],
          attrType: 'multiSelect',
        },
      ],
      Parameter: [
        {
          'Runtime Environment': ['Win32/64'],
          attrType: 'multiSelect',
        },
        {
          'Design Stage': ['ds10'],
          attrType: 'multiSelect',
        },
        {
          'Data Type': ['.zip', '.zipx'],
          attrType: 'singleSelect',
        },
        {
          'Capability Level': '',
          attrType: 'str',
        },
        {
          'Product Type': ['eDrive'],
          attrType: 'multiSelect',
        },
        {
          Baseline: '',
          attrType: 'str',
        },
        {
          Author: '',
          attrType: 'str',
        },
        {
          Domain: ['mechanical'],
          attrType: 'multiSelect',
        },
      ],
      Tests: [
        {
          'Runtime Environment': ['Win32/64'],
          attrType: 'multiSelect',
        },
        {
          'Data Type': ['.slx'],
          attrType: 'singleSelect',
        },
        {
          Author: '',
          attrType: 'str',
        },
        {
          Domain: ['thermalmechanical'],
          attrType: 'multiSelect',
        },
      ],
    },
    httpErrorGlobal: false,
    currentStep: '',
    templateSelected: '',
    taskSelectedAsssignedmentElements: [],
    jobList: {},
    checkConfigurationResult: {
      complianceCheck: [],
      smokeTest: [],
    },
    CISV: {},
  };
}
