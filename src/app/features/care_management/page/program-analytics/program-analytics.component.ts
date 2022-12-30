import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EChartsOption } from "echarts";
import { MenuItem, Message, MessageService } from "primeng/api";
import { Card, PageConfig, TextForm } from "src/app/interfaces/project";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts";
import { stateData } from "./data";
@Component({
  selector: "LDIGITAL-program-analytics",
  templateUrl: "./program-analytics.component.html",
  styleUrls: ["./program-analytics.component.scss"],
  providers: [MessageService],
})
export class ProgramAnalyticsComponent implements OnInit {
  isAPICall = false;
  message: Message[] = [];
  public pageConfig!: PageConfig;
  ismakingLive = false;
  formControlObject!: TextForm[];
  allProgramAarray: Card[] = [];
  riskProfileArray: Card[] = [];
  engagementAppSpecific: Card[] = [];
  chartOption!: EChartsOption;
  stateChartOption!: EChartsOption;
  analyticsArray: Card[] = [];
  memberRiskArray: Card[] = [];
  visitHistoryArray: Card[] = [];
  searchDataObjectPrograms: Card[] = [];
  viewAlign = "C";

  ProgramStatus = "SHADOW";
  tabStepCounter: number = 0;
  constructor(public router: Router, public messageService: MessageService) {}

  ngAfterViewInit() {
    console.log(stateData.data);
    const colors = ["#4910AE", "#EE6666"];
    this.chartOption = {
      color: colors,
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {},
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Member  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          // prettier-ignore
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          // prettier-ignore
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Member Identified",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: "Member Enrolled",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
            0.7,
          ],
        },
      ],
    };

    echarts.registerMap("USA", stateData.data as any, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15,
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5,
      },
      "Puerto Rico": {
        left: -76,
        top: 26,
        width: 2,
      },
    });
    this.stateChartOption = {
      title: {
        text: "",
        subtext: "",
        sublink: "http://www.census.gov/popest/data/datasets.html",
        left: "right",
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: "right",
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026",
          ],
        },
        text: ["High", "Low"],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: "left",
        top: "top",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "USA Members Estimated",
          type: "map",
          roam: true,
          map: "USA",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: "Alabama", value: 4822023 },
            { name: "Alaska", value: 731449 },
            { name: "Arizona", value: 6553255 },
            { name: "Arkansas", value: 2949131 },
            { name: "California", value: 38041430 },
            { name: "Colorado", value: 5187582 },
            { name: "Connecticut", value: 3590347 },
            { name: "Delaware", value: 917092 },
            { name: "District of Columbia", value: 632323 },
            { name: "Florida", value: 19317568 },
            { name: "Georgia", value: 9919945 },
            { name: "Hawaii", value: 1392313 },
            { name: "Idaho", value: 1595728 },
            { name: "Illinois", value: 12875255 },
            { name: "Indiana", value: 6537334 },
            { name: "Iowa", value: 3074186 },
            { name: "Kansas", value: 2885905 },
            { name: "Kentucky", value: 4380415 },
            { name: "Louisiana", value: 4601893 },
            { name: "Maine", value: 1329192 },
            { name: "Maryland", value: 5884563 },
            { name: "Massachusetts", value: 6646144 },
            { name: "Michigan", value: 9883360 },
            { name: "Minnesota", value: 5379139 },
            { name: "Mississippi", value: 2984926 },
            { name: "Missouri", value: 6021988 },
            { name: "Montana", value: 1005141 },
            { name: "Nebraska", value: 1855525 },
            { name: "Nevada", value: 2758931 },
            { name: "New Hampshire", value: 1320718 },
            { name: "New Jersey", value: 8864590 },
            { name: "New Mexico", value: 2085538 },
            { name: "New York", value: 19570261 },
            { name: "North Carolina", value: 9752073 },
            { name: "North Dakota", value: 699628 },
            { name: "Ohio", value: 11544225 },
            { name: "Oklahoma", value: 3814820 },
            { name: "Oregon", value: 3899353 },
            { name: "Pennsylvania", value: 12763536 },
            { name: "Rhode Island", value: 1050292 },
            { name: "South Carolina", value: 4723723 },
            { name: "South Dakota", value: 833354 },
            { name: "Tennessee", value: 6456243 },
            { name: "Texas", value: 26059203 },
            { name: "Utah", value: 2855287 },
            { name: "Vermont", value: 626011 },
            { name: "Virginia", value: 8185867 },
            { name: "Washington", value: 6897012 },
            { name: "West Virginia", value: 1855413 },
            { name: "Wisconsin", value: 5726398 },
            { name: "Wyoming", value: 576412 },
            { name: "Puerto Rico", value: 3667084 },
          ],
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
          title: "Search Program By Name",
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
          title: "Select State ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Select LOB",
          isClear: true,
          isMultiple: true,
          isText: false,
          dataList: [],
        },
        {
          title: "Select date range ",
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

  /**
   *
   * @param data
   */

  rowEmmiterHandler(data: unknown) {
    console.log(data);
  }

  /**
   * Live mode logic
   */
  converToLiveMode() {
    this.ismakingLive = !this.ismakingLive;
  }
  proceedToLiveMode() {
    this.ismakingLive = !this.ismakingLive;
    this.ProgramStatus = "IN-PROGRESS";
    // this.message.push({
    //   severity: "success",
    //   summary: "Success",
    //   detail: "Message Content",
    // });
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "You have notified all the members associated with this program ",
      sticky: true,
    });
  }
}
