import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
export interface Item {
  title: string;
  id: string | number;
  children?: Item[];
  parent?: string | number;
}
@Injectable()
export class DataService {
  constructor() {}

  getFlatData(): Observable<Item[]> {
    return of<Item[]>([
      {
        title: "Folder 1",
        id: 1,
      },
      {
        title: "Folder 2",
        id: 2,
      },
      {
        title: "File 2",
        id: 3,
        parent: 2,
      },
      {
        title: "Folder 2.2",
        id: 33,
        parent: 2,
      },
      {
        title: "Folder 2.2.1",
        id: 4,
        parent: 33,
      },
      {
        title: "Folder 2.2.2",
        id: 5,
        parent: 33,
      },
      {
        title: "Folder 2.2.3",
        id: 6,
        parent: 33,
      },
      {
        title: "File 2.2.3.1",
        id: 7,
        parent: 6,
      },
      {
        title: "File 2.2.3.2",
        id: 8,
        parent: 6,
      },
      {
        title: "Folder 2.2.4",
        id: 9,
        parent: 33,
      },
      {
        title: "File 2.2.4.1",
        id: 10,
        parent: 9,
      },
      {
        title: "Folder 2.3",
        id: 11,
        parent: 2,
      },
      {
        title: "Folder 2.3.1",
        id: 12,
        parent: 11,
      },
      {
        title: "File 2.3.1.1",
        id: 13,
        parent: 12,
      },
      {
        title: "File 2.3.1.2",
        id: 14,
        parent: 12,
      },
      {
        title: "File 2.3.1.3",
        id: 15,
        parent: 12,
      },
      {
        title: "Folder 2.3.1.4",
        id: 16,
        parent: 12,
      },
      {
        title: "File 2.3.1.4.1",
        id: 17,
        parent: 16,
      },
    ]);
  }

  getTreeData() {
    return of([
      {
        title: "childless",
        id: 1,
        children: [],
      },
      {
        title: "great grandparent",
        id: 2,
        children: [
          {
            title: "childless grandsibling",
            id: 3,
            children: [],
          },
          {
            title: "grandparent",
            id: 33,
            children: [
              {
                title: "childless sibling",
                id: 4,
                children: [],
              },
              {
                title: "another childless sibling",
                id: 5,
                children: [],
              },
              {
                title: "parent",
                id: 6,
                children: [
                  {
                    title: "child",
                    id: 7,
                    children: [],
                  },
                  {
                    title: "another child",
                    id: 8,
                    children: [],
                  },
                ],
              },
              {
                title: "another parent",
                id: 9,
                children: [
                  {
                    title: "child",
                    id: 10,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            title: "another grandparent",
            id: 11,
            children: [
              {
                title: "parent",
                id: 12,
                children: [
                  {
                    title: "child",
                    id: 13,
                    children: [],
                  },
                  {
                    title: "another child",
                    id: 14,
                    children: [],
                  },
                  {
                    title: "a third child",
                    id: 15,
                    children: [],
                  },
                  {
                    title: "yet another child",
                    id: 16,
                    children: [
                      {
                        title: "baby",
                        id: 17,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  }
}
export class treeData {
  static data = [
    {
      key: "0",
      label: "Documents",
      data: "Documents Folder",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "0-0",
          label: "Work",
          data: "Work Folder",
          icon: "pi pi-fw pi-cog",
          children: [
            {
              key: "0-0-0",
              label: "Expenses.doc",
              icon: "pi pi-fw pi-file",
              data: "Expenses Document",
            },
            {
              key: "0-0-1",
              label: "Resume.doc",
              icon: "pi pi-fw pi-file",
              data: "Resume Document",
            },
          ],
        },
        {
          key: "0-1",
          label: "Home",
          data: "Home Folder",
          icon: "pi pi-fw pi-home",
          children: [
            {
              key: "0-1-0",
              label: "Invoices.txt",
              icon: "pi pi-fw pi-file",
              data: "Invoices for this month",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Events",
      data: "Events Folder",
      icon: "pi pi-fw pi-calendar",
      children: [
        {
          key: "1-0",
          label: "Meeting",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Meeting",
        },
        {
          key: "1-1",
          label: "Product Launch",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Product Launch",
        },
        {
          key: "1-2",
          label: "Report Review",
          icon: "pi pi-fw pi-calendar-plus",
          data: "Report Review",
        },
      ],
    },
    {
      key: "2",
      label: "Movies",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      children: [
        {
          key: "2-0",
          icon: "pi pi-fw pi-star-fill",
          label: "Al Pacino",
          data: "Pacino Movies",
          children: [
            {
              key: "2-0-0",
              label: "Scarface",
              icon: "pi pi-fw pi-video",
              data: "Scarface Movie",
            },
            {
              key: "2-0-1",
              label: "Serpico",
              icon: "pi pi-fw pi-video",
              data: "Serpico Movie",
            },
          ],
        },
        {
          key: "2-1",
          label: "Robert De Niro",
          icon: "pi pi-fw pi-star-fill",
          data: "De Niro Movies",
          children: [
            {
              key: "2-1-0",
              label: "Goodfellas",
              icon: "pi pi-fw pi-video",
              data: "Goodfellas Movie",
            },
            {
              key: "2-1-1",
              label: "Untouchables",
              icon: "pi pi-fw pi-video",
              data: "Untouchables Movie",
            },
          ],
        },
      ],
    },
  ];

  static data2 = [
    {
      id: 0,
      title: "SCENARIO",
      cords: [116.0234375, 810.5, 625, 972],
      condition: "AND",
      isChecked: false,
      children: [
        {
          id: 1,
          title: "CARD",
          cords: [160.0234375, 862.5, 576, 944],
          condition: "AND",
          isChecked: false,
          children: [
            {
              id: 2,
              title: "SUB CARD",
              cords: [207.0234375, 878.5, 517, 931],
              condition: "AND",
              isChecked: false,
            },
            {
              id: 3,
              title: "SUB CARD",
              cords: [305.0234375, 898.5, 501, 920],
              condition: "AND",
              isChecked: false,
            },
          ],
        },
      ],
    },
  ];
  static dataObject = {
    us_states: [
      {
        title: "Alabama",
        code: "AL",
      },
      {
        title: "Alaska",
        code: "AK",
      },
      {
        title: "Arizona",
        code: "AZ",
      },
      {
        title: "Arkansas",
        code: "AR",
      },
      {
        title: "California",
        code: "CA",
      },
      {
        title: "Colorado",
        code: "CO",
      },
      {
        title: "Connecticut",
        code: "CT",
      },
      {
        title: "Delaware",
        code: "DE",
      },
      {
        title: "District Of Columbia",
        code: "DC",
      },
      {
        title: "Florida",
        code: "FL",
      },
      {
        title: "Georgia",
        code: "GA",
      },
      {
        title: "Hawaii",
        code: "HI",
      },
      {
        title: "Idaho",
        code: "ID",
      },
      {
        title: "Illinois",
        code: "IL",
      },
      {
        title: "Indiana",
        code: "IN",
      },
      {
        title: "Iowa",
        code: "IA",
      },
      {
        title: "Kansas",
        code: "KS",
      },
      {
        title: "Kentucky",
        code: "KY",
      },
      {
        title: "Louisiana",
        code: "LA",
      },
      {
        title: "Maine",
        code: "ME",
      },
      {
        title: "Maryland",
        code: "MD",
      },
      {
        title: "Massachusetts",
        code: "MA",
      },
      {
        title: "Michigan",
        code: "MI",
      },
      {
        title: "Minnesota",
        code: "MN",
      },
      {
        title: "Mississippi",
        code: "MS",
      },
      {
        title: "Missouri",
        code: "MO",
      },
      {
        title: "Montana",
        code: "MT",
      },
      {
        title: "Nebraska",
        code: "NE",
      },
      {
        title: "Nevada",
        code: "NV",
      },
      {
        title: "New Hampshire",
        code: "NH",
      },
      {
        title: "New Jersey",
        code: "NJ",
      },
      {
        title: "New Mexico",
        code: "NM",
      },
      {
        title: "New York",
        code: "NY",
      },
      {
        title: "North Carolina",
        code: "NC",
      },
      {
        title: "North Dakota",
        code: "ND",
      },
      {
        title: "Ohio",
        code: "OH",
      },
      {
        title: "Oklahoma",
        code: "OK",
      },
      {
        title: "Oregon",
        code: "OR",
      },
      {
        title: "Pennsylvania",
        code: "PA",
      },
      {
        title: "Rhode Island",
        code: "RI",
      },
      {
        title: "South Carolina",
        code: "SC",
      },
      {
        title: "South Dakota",
        code: "SD",
      },
      {
        title: "Tennessee",
        code: "TN",
      },
      {
        title: "Texas",
        code: "TX",
      },
      {
        title: "Utah",
        code: "UT",
      },
      {
        title: "Vermont",
        code: "VT",
      },
      {
        title: "Virginia",
        code: "VA",
      },
      {
        title: "Washington",
        code: "WA",
      },
      {
        title: "West Virginia",
        code: "WV",
      },
      {
        title: "Wisconsin",
        code: "WI",
      },
      {
        title: "Wyoming",
        code: "WY",
      },
    ],
    lob: [
      {
        title: "CSBD",
        code: "csbd",
      },
      {
        title: "MEDICARE",
        code: "mcdr",
      },
      {
        title: "MEDICAID",
        code: "mccd",
      },
    ],
    engagements: [
      {
        title: "Self Achiever",
        description:
          "We know you strive to make change in your life. We have a method to control your Hypertension",
        id: "100",
      },
      {
        title: "Balance Seeker",
        description:
          "We know you strive to make change in your life. We have a method to control your Hypertension",
        id: "101",
      },
      {
        title: "Priority Juggler",
        description:
          "We know you strive to make change in your life. We have a method to control your Hypertension",
        id: "102",
      },
      {
        title: "Direction Taker",
        description:
          "We know you strive to make change in your life. We have a method to control your Hypertension",
        id: "103",
      },
      {
        title: "Willfull Endurer",
        description:
          "We know you strive to make change in your life. We have a method to control your Hypertension",
        id: "104",
      },
    ],
    conditions: [
      {
        title: "Acute_Myocardial_Infection",
        code: "1",
      },
      {
        title: "Alzheimers_Disease",
        code: "2",
      },
      {
        title: "Anemia",
        code: "3",
      },
      {
        title: "Atrial_Fibrillation_and_Flutter",
        code: "5",
      },
      {
        title: "Cancer_Breast",
        code: "6",
      },
      {
        title: "Cancer_Colorectal",
        code: "7",
      },
      {
        title: "Cancer_Endometrial",
        code: "8",
      },
      {
        title: "Cancer_Lung",
        code: "9",
      },
      {
        title: "Cancer_Prostate",
        code: "10",
      },
      {
        title: "Cancer_Urologic_Kidney_Renal_Pelvis_and_Ureter",
        code: "11",
      },
      {
        title: "Cataract",
        code: "12",
      },
      {
        title: "Chronic_Kidney_Disease",
        code: "13",
      },
      {
        title: "Chronic_Obstructive_Pulmonary_Disease",
        code: "14",
      },
      {
        title: "Depression_Bipolar_or_Other_Depressive_Mood_Disorders",
        code: "15",
      },
      {
        title: "Diabetes_Type1",
        code: "16",
      },
      {
        title: "Glaucoma",
        code: "17",
      },
      {
        title: "Heart_Failure_and_Non-Ischemic_Heart_Disease",
        code: "18",
      },
      {
        title: "Fracture",
        code: "19",
      },
      {
        title: "Hyperlipidemia",
        code: "20",
      },
      {
        title: "Hypothyroidism",
        code: "22",
      },
      {
        title: "Ischemic_Heart_Disease",
        code: "23",
      },
      {
        title: "NonAlzheimers_Dementia",
        code: "24",
      },
      {
        title: "Osteoporosis_With_or_Without_Pathological_Fracture",
        code: "25",
      },
      {
        title: "Parkinsons_Disease_and_Secondary_Parkinsonism",
        code: "26",
      },
      {
        title: "Pneumonia_All_cause",
        code: "27",
      },
      {
        title: "Arthritis",
        code: "28",
      },
      {
        title: "asthma",
        code: "008",
      },
      {
        title: "hypertension",
        code: "036",
      },
      {
        title: "maternity",
        code: "040",
      },
      {
        title: "diabetes_2",
        code: "026",
      },
      {
        title: "depression",
        code: "024",
      },
    ],
  };
}
