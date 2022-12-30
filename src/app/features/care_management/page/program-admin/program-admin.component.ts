import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Card, PageConfig, TextForm } from "src/app/interfaces/project";
import { EChartsOption } from "echarts";
import { Router } from "@angular/router";
import * as echarts from "echarts";
import { ProgramAdminService } from "src/app/services/program_admin/program-admin.service";
import { DatePipe } from "@angular/common";
import { AppState } from "src/app/interfaces/store";
import { Store } from "@ngrx/store";

import * as LDIGITALActions from "../../../../actions/lDigital.store.action";
@Component({
  selector: "LDIGITAL-program-admin",
  templateUrl: "./program-admin.component.html",
  styleUrls: ["./program-admin.component.scss"],
  providers: [DatePipe],
})
export class ProgramAdminComponent implements OnInit {
  isAPICall = false;
  public pageConfig!: PageConfig;
  formControlObject!: TextForm[];
  allProgramAarray: Card[] = [];
  allProgramAarrayForTable: Card[] = [];
  chartOption!: EChartsOption;
  analyticsArray: Card[] = [];
  searchDataObjectPrograms: [] = [];
  viewAlign = "C";
  programResponse: any[] = [];
  constructor(
    public router: Router,
    private programService: ProgramAdminService,
    private datepipe: DatePipe,
    private store: Store<AppState>
  ) { }

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

    // this.chartOption = {
    //   xAxis: {
    //     type: "category",
    //     boundaryGap: false,
    //   },
    //   yAxis: {
    //     type: "value",
    //     boundaryGap: [0, "30%"],
    //   },
    //   visualMap: {
    //     type: "piecewise",
    //     show: false,
    //     dimension: 0,
    //     seriesIndex: 0,
    //     pieces: [
    //       {
    //         gt: 1,
    //         lt: 3,
    //         color: "rgba(0, 0, 180, 0.4)",
    //       },
    //       {
    //         gt: 5,
    //         lt: 7,
    //         color: "rgba(0, 0, 180, 0.4)",
    //       },
    //     ],
    //   },
    //   series: [
    //     {
    //       type: "line",
    //       smooth: 0.6,
    //       symbol: "none",
    //       lineStyle: {
    //         color: "#5470C6",
    //         width: 5,
    //       },
    //       markLine: {
    //         symbol: ["none", "none"],
    //         label: { show: false },
    //         data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
    //       },
    //       areaStyle: {},
    //       data: [
    //         ["2019-10-10", 200],
    //         ["2019-10-11", 560],
    //         ["2019-10-12", 750],
    //         ["2019-10-13", 580],
    //         ["2019-10-14", 250],
    //         ["2019-10-15", 300],
    //         ["2019-10-16", 450],
    //         ["2019-10-17", 300],
    //         ["2019-10-18", 100],
    //       ],
    //     },
    //   ],
    // };
  }
  ngOnInit(): void {
    this.getProgramAPI();

    // this.store.select("store").subscribe((store) => {
    //   console.log(store);
    // });

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
          title: "Search by Program name ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search Program By Name",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: true,
          dataList: [
          ],
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
    } catch (error) { }
  }

  rowEmmiterHandler(data: unknown) {
    console.log(data);
  }
  createNewProgram() {
    this.router.navigateByUrl("/admin/create_project");
    this.store.dispatch(
      new LDIGITALActions.UpdateProgramDetails({
        programDetails: {},
      })
    );
  }
  getProgramAPI() {
    this.isAPICall = true;
    this.programService.getProgramConfig().then((res: any) => {
      console.log("response", res);
      this.isAPICall = false;
      Object.entries(res.result.lob).forEach(([key, value]) => {
        (this.formControlObject[1].dataList as {}[]).push({ title: value });
      });

      Object.entries(res.result.us_states).forEach(([key, value]) => {
        (this.formControlObject[2].dataList as {}[]).push({
          title: key + ` - ${value}`,
        });
      });
      Object.entries(res.result.cm_programs_list).forEach(([key, value]) => {
        (this.formControlObject[0].dataList as {}[]).push(key);
      });
      console.log("formcontrollob", this.formControlObject[1]);
    });
  }
  proName: string = "";
  event: null = null;
  getFormData(e: any) {
    try {
      this.event = e;
      this.allProgramAarrayForTable = [];
      this.allProgramAarray = [];
      // let proName = "";
      let programName = e[0]?.value;
      let lob = e[1]?.value.map((x: any) => x.title.toLowerCase());
      let states = e[2]?.value.map((x: any) =>
        x.title.substr(0, 2).toLowerCase()
      );
      let dateRange = e[3]?.value;

      this.proName = programName ? programName : programName?.trim();

      let startDt: any = null;
      let endDt: any = null;
      startDt = this.datepipe.transform(dateRange?.[0], "yyyy-MM-dd");
      endDt = this.datepipe.transform(dateRange?.[1], "yyyy-MM-dd");
      console.log("start dt", startDt, "end dt", endDt);

      console.log("program name", this.proName, "lob", lob, "states", states);
      this.isAPICall = true;
      // if()
      let payLoadObject = {
        program_name: this.proName ? this.proName : "",
        lob: lob ? lob : [],
        states: states ? states : [],
        start_date: startDt,
        end_date: endDt,
      };

      this.programService.getPrograms(payLoadObject).then((res: any) => {
        this.isAPICall = false;
        console.log("searched programs", res);
        this.programResponse = res.result;
        let program_count = res.programs_count;
        res?.result.map((x: any) => {
          let date = this.datepipe.transform(x.create_ts, "yyyy-MM-dd");
          const desc = x.program_id + " | " + date;
          const title = x.program_name + " : " + x.program_id;
          let obj = {
            title: title,
            lob: x.lob,
            count: program_count,
            description: desc,
            mode: x.mode,
            id: x.program_id,
          };
          this.allProgramAarrayForTable.push(obj);
          console.log(obj);

          /**
           * programs in card view
           */
          let cardObj = {
            title: title,
            count_score: program_count,
            description: desc,
            apiData: {
              name: "cs_fmuInputSelectorTherm.fmu",
              id: x.program_id,
            },
            isMultiple: false,
            isDelete: false,
            author: x.program_name,
            type: "Models",
            actions: [
              {
                label: "Options",
                items: [
                  {
                    label: "View",
                    icon: "pi pi-eye",
                    command: () => {
                      console.log("view program");
                      this.router.navigateByUrl("/admin/create_project");
                      this.store.dispatch(
                        new LDIGITALActions.UpdateProgramDetails({
                          programDetails: x,
                        })
                      );
                      //this.viewProgram(x);
                    },
                  },
                  {
                    label: "Delete",
                    icon: "pi pi-times",
                    command: () => {
                      console.log("delete menu selected");
                      this.deleteProgram(x.program_id);
                    },
                  },
                  {
                    label: "Copy",
                    icon: "pi pi-copy",
                    command: () => { },
                  },
                  {
                    label: "Connect",
                    icon: "pi pi-envelope",
                    command: () => { },
                  },
                ],
              },
            ] as MenuItem[],
            isSingleCheckUI: true,
            deleteIcon: "assets/icons/delete.svg",
          };
          this.allProgramAarray.push(cardObj);
        });
        console.log(this.allProgramAarray);
        this.store.dispatch(
          new LDIGITALActions.UpdateProgramDetails({
            programDetails: this.allProgramAarray,
          })
        );
      });
    } catch (error) { }
  }

  selectCard(e: any) {
    console.log("selected card", e);
  }
  item: any;
  selectCardItems(e: any, item: any) {
    this.item = item;
    console.log("item", item);
  }
  deleteProgram(id: number) {
    console.log("all program array for table", this.allProgramAarrayForTable);
    console.log("all program array", this.allProgramAarray);

    this.programService.deleteProgram(id).then((res: any) => {
      console.log("deleted response", res);
      if (res?.status_code == 200) {
        this.getFormData(this.event);
      }
    });
  }

  viewProgram(data: any) {
    console.log("program", this.programResponse, "data", data);
    this.router.navigateByUrl("/admin/create_project");
    this.programService.programData$.next(data);
  }
}
