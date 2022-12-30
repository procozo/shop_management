import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EChartsOption } from "echarts";
import { MenuItem } from "primeng/api";
import { Card, PageConfig, TextForm } from "src/app/interfaces/project";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts";
//  echarts.use([SVGRenderer, CanvasRenderer]);
@Component({
  selector: "LDIGITAL-search-member",
  templateUrl: "./search-member.component.html",
  styleUrls: ["./search-member.component.scss"],
})
export class SearchMemberComponent implements OnInit {
  isAPICall = false;
  public pageConfig!: PageConfig;
  formControlObject!: TextForm[];
  allProgramAarray: Card[] = [];
  programCategoryAbstractArray: Card[] = [];
  riskProfileArray: Card[] = [];
  engagementAppSpecific: Card[] = [];
  chartOption!: EChartsOption;
  analyticsArray: Card[] = [];
  memberRiskArray: Card[] = [];
  visitHistoryArray: Card[] = [];
  searchDataObjectPrograms: Card[] = [];
  viewAlign = "C";

  tabStepCounter: number = 0;
  constructor(public router: Router) {}

  ngAfterViewInit() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
      var now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
      );
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    this.chartOption = {
      tooltip: {
        trigger: "axis",
        position: function (pt) {
          return [pt[0], "10%"];
        },
        backgroundColor: "#4910AE",
        textStyle: {
          color: "#ffffff",
        },
      },
      title: {
        left: "center",
        text: "",
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date,
        show: true,
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        show: true,
      },
      // dataZoom: [
      //   {
      //     type: "inside",
      //     start: 0,
      //     end: 10,
      //   },
      //   {
      //     start: 0,
      //     end: 10,
      //   },

      // ],
      series: [
        {
          name: "Fake Data",
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgba(240, 245, 254, 0.2)",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#4910AE",
              },
              {
                offset: 1,
                color: "rgba(240, 245, 254, 0.0776)",
              },
            ]),
          },
          data: data,
        },
      ],
    };
  }
  ngOnInit(): void {
    /**
     * Page
     */

    this.pageConfig = {
      isNotification: false,
      stepNumber: 2,
      notificationsList: [],
    };

    try {
      this.formControlObject = [
        {
          title: "Enter Member ID ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "enter Member ID",
          isClear: true,
          isMultiple: false,
          isText: true,
          dataList: [
            {
              title: "CSBD",
              code: 1,
            },
          ],
        },
        {
          title: "Enter First Name ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter First Name",
          isClear: true,
          isMultiple: false,
          isText: true,
        },
        {
          title: "Enter Last Name ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter Last Name",
          isClear: true,
          isMultiple: false,
          isText: true,
        },

        {
          title: "Select DOB Range ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Select DOB Range",
          isClear: true,
          isMultiple: false,
          isText: false,
          isDate: true,
          dataList: [],
        },
        {
          title: "Search",
          required: true,
          type: "button",
          isSearch: true,
          placeHolder: "Select LOB",
          isClear: true,
          isMultiple: false,
          isText: false,
          isDate: false,
          dataList: [],
          isButton: true,
        },
      ];

      this.allProgramAarray = [
        {
          title: "Vinayaka D | 3213123",
          count_score: 30,
          description: "Male | 15/05/1995 | LA",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Vinayaka",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Jessica | 3213123",
          count_score: 30,
          description: "Female | 15/05/1990 | LA",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          author: "Jessica",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];

      this.engagementAppSpecific = [
        {
          title: "Connected Care Management",
          count_score: 30,
          description: "Last connected | 15/05/1995 ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          risk_type: "good",
          // author: "Care management",
          icon: "assets/icons/cm.svg",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View More",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Sydney Health",
          count_score: 30,
          risk_type: "medium",
          description: "Last connected | 15/05/1995 ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Sydney health",
          icon: "assets/icons/virtual_pcp.svg",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View More",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Virtual PCP",
          count_score: 30,
          description: "Last connected | 15/05/1995 ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          risk_type: "bad",
          isMultiple: false,
          isDelete: false,
          // author: "Virtual PCP",
          icon: "assets/icons/sydney.svg",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View More",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];

      this.visitHistoryArray = [
        {
          title: "Last Visit",
          count_score: 30,
          description: "Last connected | 15/05/1995 ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          risk_type: "good",
          // author: "Care management",
          icon: "assets/icons/last_visit.svg",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View More",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Last Visit",
          count_score: 30,
          risk_type: "medium",
          description: "Last connected | 15/05/1995 ",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Sydney health",
          icon: "assets/icons/history.svg",
          type: "Models",
          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View More",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];

      this.riskProfileArray = [
        {
          title: "Medical",
          count_score: 30,
          risk_type: "good",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Behavioral",
          count_score: 30,
          risk_type: "medium",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Nutrition",
          count_score: 30,
          risk_type: "bad",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Economic",
          risk_type: "medium",
          count_score: 30,
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Employment",
          count_score: 30,
          risk_type: "good",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Housing",
          count_score: 30,
          risk_type: "good",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];

      this.programCategoryAbstractArray = [
        {
          title: "Diabetes",
          count_score: 30,
          risk_type: "bad",
          description: "Last recorded | 12/12/2022 | Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          icon: "assets/icons/last_visit.svg",
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
          range_value: 0.9,
        },
        {
          title: "Coronary Artery Disease (CAD)",
          count_score: 30,
          risk_type: "good",
          description: "Last recorded | 12/12/2022 | Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          icon: "assets/icons/last_visit.svg",
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
          range_value: 0.9,
        },
        {
          title: "Asthma",
          count_score: 30,
          risk_type: "good",
          description: "Last recorded | 12/12/2022 | Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          icon: "assets/icons/last_visit.svg",
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
          range_value: 0.9,
        },
      ];

      this.memberRiskArray = [
        {
          title: "Model Score | 1.9",
          count_score: 30,
          risk_type: "bad",
          description:
            "Risk scrore depend on the factor A and B which is very important",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Acuity Score",
          count_score: 30,
          risk_type: "medium",
          description:
            "Risk scrore depend on the factor A and B which is very important",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Member Spend in $",
          count_score: 30,
          risk_type: "bad",
          description: "Upward Mobility",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",

          actions: [
            {
              label: "Options",
              items: [
                {
                  label: "View",
                  icon: "pi pi-eye",
                  command: () => {},
                },
                {
                  label: "Connect",
                  icon: "pi pi-envelope",
                  command: () => {},
                },
              ],
            },
          ] as MenuItem[],
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];
      this.analyticsArray = [
        {
          title: "Created",
          count_score: 30,
          description: "members",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          info: false,
          count: 30,
          // author: "Prad",
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Identified",
          count_score: 90,
          description: "members",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          info: false,
          count: 30,
          // author: "Prad",
          type: "Models",
          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
      ];
    } catch (error) {}
  }

  rowEmmiterHandler(data: unknown) {
    console.log(data);
  }
}
