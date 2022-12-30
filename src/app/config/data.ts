import { Element } from './../interfaces/project';
import { Card } from 'src/app/external_modules/@digital-twin/interfaces';

export class Data {
  ModelData!: Card[];
  static dataProvider = {
  };
  static actualApplicationValues = {
    elements: [
      {
        title: 'Models',
        description: '',
      },
      {
        title: 'Parameters',
        description: '',
      },
      {
        title: 'Tests',
        description: '',
      },
    ],
    attributes: [
      {
        title: 'Name',
        description: '',
      },
      {
        title: 'Size',
        description: '',
      },
    ],
  };
  // static tasksData = [{
  //   title: 'Task 2',
  //   workflow: this.taskElements.workflowSteps,
  //   template: {},
  //   description: '',
  //   isAssigned: true,
  //   assignedElements: {
  //     models: [{deleteIcon: 'assets/icons/delete.svg',
  //     description: 'description',
  //     isChecked: true,
  //     isDelete: true,
  //     isMultiple: true,
  //     isSingleCheckUI: true,
  //     title: 'Model1',
  //     type: 'Models'}],
  //     parameters: [],
  //     tests: []
  //   }
  // },
  // {
  //   title: 'Task 3',
  //   workflow:this.taskElements.workflowSteps,
  //   template: {},
  //   description: '',
  //   isAssigned: true,
  //   assignedElements: {
  //     models: [],
  //     parameters: [{deleteIcon: 'assets/icons/delete.svg',
  //     description: 'description',
  //     isChecked: true,
  //     isDelete: true,
  //     isMultiple: true,
  //     isSingleCheckUI: true,
  //     title: 'Param1',
  //     type: 'Parameters'}],
  //     tests: []
  //   }
  // }];

  // static testResultsOverview = [
  //   {
  //     icon: 'assets/icons/run_test.svg',
  //     iconTitle: 'Failed',
  //     title: 'Total Run Combinations',
  //     titleOpacity: 0.8,
  //     count: '0',
  //     description: undefined,
  //     isDelete: false,
  //     isStatus: false,
  //     isCreatedAt: undefined,
  //     isExport: false,
  //     subData: [],
  //     isTest: undefined,
  //     isElement: undefined,
  //     author: undefined,
  //     version: undefined,
  //     deleteIcon: 'assets/icons/delete.svg',
  //     isMultiple: false,
  //     statusHolderIcon: 'assets/icons/switch-holder.svg'
  //   },
  //   {
  //     icon: 'assets/icons/pass.svg',
  //     iconTitle: 'pipeline',
  //     title: 'Total Passed',
  //     count: '0',
  //     titleOpacity: 0.8,
  //     description: undefined,
  //     isDelete: false,
  //     isStatus: false,
  //     isCreatedAt: undefined,
  //     isExport: false,
  //     subData: [],
  //     isTest: undefined,
  //     isElement: undefined,
  //     author: undefined,
  //     version: undefined,
  //     deleteIcon: 'assets/icons/delete.svg',
  //     isMultiple: false,
  //     statusHolderIcon: 'assets/icons/switch-holder.svg'
  //   },
  //   {
  //     icon: 'assets/icons/failed.svg',
  //     iconTitle: 'running',
  //     title: 'Total Failed',
  //     count: '0',
  //     titleOpacity: 0.8,
  //     description: undefined,
  //     isDelete: false,
  //     isStatus: false,
  //     isCreatedAt: undefined,
  //     isExport: false,
  //     subData: [],
  //     isTest: undefined,
  //     isElement: undefined,
  //     author: undefined,
  //     version: undefined,
  //     deleteIcon: 'assets/icons/delete.svg',
  //     isMultiple: false,
  //     statusHolderIcon: 'assets/icons/switch-holder.svg'
  //   }
  // ];

  static searchMetaData = {
    Models: [
      {
        'Runtime Environment': [
          'Win32/64'
        ],
        attrType: 'multiSelect'
      },
      {
        'Design Stage': [
          'ds10'
        ],
        attrType: 'multiSelect'
      },
      {
        'Data Type': [
          '.fmu'
        ],
        attrType: 'singleSelect'
      },
      {
        'Capability Level': '',
        attrType: 'str'
      },
      {
        'Product Type': [
          'eDrive',
          'electric machineeDrive'
        ],
        attrType: 'multiSelect'
      },
      {
        Baseline: '',
        attrType: 'str'
      },
      {
        Author: '',
        attrType: 'str'
      },
      {
        Domain: [
          'thermal',
          'mechanical'
        ],
        attrType: 'multiSelect'
      }
    ],
    Parameter: [
      {
        'Runtime Environment': [
          'Win32/64'
        ],
        attrType: 'multiSelect'
      },
      {
        'Design Stage': [
          'ds10'
        ],
        attrType: 'multiSelect'
      },
      {
        'Data Type': [
          '.zipx'
        ],
        attrType: 'singleSelect'
      },
      {
        'Capability Level': '',
        attrType: 'str'
      },
      {
        'Product Type': [
          'eDrive'
        ],
        attrType: 'multiSelect'
      },
      {
        Baseline: '',
        attrType: 'str'
      },
      {
        Author: '',
        attrType: 'str'
      },
      {
        Domain: [
          'mechanical'
        ],
        attrType: 'multiSelect'
      }
    ],
    Tests: [
      {
        'Runtime Environment': [
          'Win32/64'
        ],
        attrType: 'multiSelect'
      },
      {
        Author: '',
        attrType: 'str'
      },
      {
        Domain: [
          'thermalmechanical'
        ],
        attrType: 'multiSelect'
      }
    ]
  }

  static simulateConfigData = [
    {name: 'Write Statistics', key: 'write_statistics'},
    {name: 'Write Famos', key: 'write_famos'},
    {name: 'Write Sankey', key: 'write_sankey'},
    {name: 'Write Matlab', key: 'write_matlab'},
    {name: 'Write Mf4', key: 'write_mf4'},
    {name: 'Write Csv', key: 'write_csv'},
    {name: 'Use Timestamp in Filename', key: 'use_timestamp_in_filename'},
    {name: 'Write Input File', key: 'write_input_file'}
  ]
}
