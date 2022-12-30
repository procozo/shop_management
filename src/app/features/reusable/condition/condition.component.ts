import { Component, Input, OnInit } from "@angular/core";
import { Card, PlaceHolder } from "src/app/interfaces/project";

export interface Condition {
  conditionList?: Card[];
  isMainTree?: boolean;
  conditionMechanismSkeleton?: {
    conditionList?: Card[];
    innerConditionArray?: {
      isShowDataConditionList?: boolean | unknown | null;
      dataList?: {}[];
      isCondition?: boolean;
      range?: number[];
      step?: number;
      title?: string;
      selectedString?: unknown | string | null;
      value?: string | number | {}[] | PlaceHolder[];
      min?: number;
      max?: number;
      isDelete?: boolean;
      condition?: string | unknown | null;
      topCondition?: string | unknown | null;
    }[];
    isCondition?: boolean;
    title?: string;
    min?: number;
    max?: number;
    condition?: string | unknown | null;
    topCondition?: null | unknown;
    selectedString?: unknown | string | null;
  }[];
}

@Component({
  selector: "LDIGITAL-condition",
  templateUrl: "./condition.component.html",
  styleUrls: ["./condition.component.scss"],
})
export class ConditionComponent implements OnInit {
  @Input() options: Condition = {};
  rangeValues: number[] = [0.1, 1];
  mainConditionsArray!: { condition: Condition[] }[];
  mainCondition: string = "AND";
  cloneCondition!: Card[];
  filteredConditionList:any[]=[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.options);

    // this.options.conditionMechanismSkeleton = ;
    console.log(this.options);

    this.cloneCondition = this.options?.conditionMechanismSkeleton?.[0]
      ?.innerConditionArray?.[0]?.dataList as Card[];
  }

  ngAfterViewInit() {}
  /* Onchange method while updating main condition */
  updateMainCondtnType(condition:any,index:number){
    index >0 ?((this.options.conditionMechanismSkeleton as [])[index-1] as {condition:string}).condition = condition.condition: '';
    console.log("condition before",condition);
    ((condition as {innerConditionArray :{}[]}).innerConditionArray[0] as {selectedString:string}).selectedString = condition.selectedString.title;
    this.filteredConditionList = condition.conditionList.filter((el:any)=> el.title != condition.selectedString.title);
    console.log("condition after",condition);
  }
  /**
   *
   * @param data
   */
  addCondition(
    data: {
      condition?: unknown;
      isShowDataConditionList?: unknown;
      dataList?: unknown;
      title?: string;
      isCondition?: boolean
    },
    _condition: unknown,
    index: number
  ): void {
    console.log(
      _condition,
      data,
      index,
      (_condition as { innerConditionArray: unknown }).innerConditionArray as []
    );
    let condition = (_condition as { innerConditionArray: unknown })
      .innerConditionArray as [];
      if((condition as []).length as number == 3){
        data.dataList = []
      } else
       data.dataList = (data as {dataList:[]}).dataList.filter((x:{title:string})=> x.title != data.title);
    console.log(condition[index]);
    (condition[index] as { condition: string }).condition = "AND";
    (
      condition[index] as { isShowDataConditionList: boolean }
    ).isShowDataConditionList = true;
  }

  /**
   *
   * @param data
   */
  updateConditionType(
    data: { selectedString?: unknown;isCondition?: boolean },
    e: { value: { title: string } },
    _condition: unknown,
    index: number,
    innerIndex: number
  ) {
    //  return Number(counter) >= Number(mainCounter) ? false : true;

    //  data.selectedString =

    let currentCondition = (
      this.options.conditionMechanismSkeleton?.[index] as {
        innerConditionArray?: [];
      }
    ).innerConditionArray?.[innerIndex];

    console.log(currentCondition);
    (currentCondition as unknown as { value: {}[] }).value =
      e.value as unknown as PlaceHolder[];
      let innerCndtnLength:number = ((_condition as {innerConditionArray?: []}).innerConditionArray as {length:number}).length;

      //data.selectedString = e.value.title;
      if((_condition as {innerConditionArray?: []}).innerConditionArray?.[innerCndtnLength-1]['condition'] == null){
        ((_condition as {innerConditionArray: []}).innerConditionArray[innerCndtnLength-1] as {title:string}).title = e.value.title;
      }else
    data.selectedString = e.value.title;
    (
      (
        this.options.conditionMechanismSkeleton?.[index] as {
          innerConditionArray?: [];
        }
      ).innerConditionArray as Condition[]
    )?.push({
      isCondition: true,
      isShowDataConditionList: false,
      dataList: this.options.conditionMechanismSkeleton?.[index]
        .innerConditionArray?.[0].dataList as [],
      selectedString: null,
      // value: e.value,
      title: e.value.title,
      min: 0.0,
      max: 1.0,
      range: [0.0, 0.3],
      step: 0.1,
      condition: null,
      topCondition: null,
    } as Condition);
    console.log(this.options.conditionMechanismSkeleton);

    const counter = (
      (this.options.conditionMechanismSkeleton as {}[])[index] as {
        innerConditionArray: {}[];
      }
    )?.innerConditionArray?.length;
    let condition = (_condition as { innerConditionArray: unknown })
      .innerConditionArray as [];
      if((condition as []).length as number == 3){
       ((
       (
        (this.options.conditionMechanismSkeleton as {}[])[index] as {
          innerConditionArray: [];
        }
        ).innerConditionArray as Condition[])[2] as {isCondition:boolean}).isCondition = false;
     
      }
    const mainCounter = (data as { dataList: {}[] })?.dataList?.length;
    // console.log(
    //   (data as { dataList: {}[] }).dataList.length ===
    //     (data as { innerConditionArray: {}[] })?.innerConditionArray?.length
    // );
    console.log(Number(counter), Number(mainCounter));
  }

  /**
   * to add the application level condition to the data
   * @param condition
   */
  addNewCondition(condition: string) {
    try {
      this.mainCondition = condition;
      console.log(this.cloneCondition);
      this.options.conditionMechanismSkeleton?.push({
        conditionList: this.filteredConditionList,//this.options.conditionList,
        innerConditionArray: [
          {
            isCondition: true,
            isShowDataConditionList: false,
            dataList: this.cloneCondition,
            selectedString: null,
            title: "acuty score",
            min: 0.0,
            max: 1.0,
            range: [0.0, 1.0],
            step: 0.1,
            condition: null,
            topCondition: null,
          },
        ],
        isCondition: true,
        title: "acuty score",
        min: 0.0,
        max: 1.0,
        condition: condition,//"OR",
        topCondition: condition,
      });
    } catch (error) {}
  }
  deleteData(index: number,condition:unknown) {
    this.options.conditionMechanismSkeleton?.map((el:any)=>el.conditionList.push((condition as {selectedString:{}}).selectedString));
    this.options.conditionMechanismSkeleton?.splice(index, 1);
  }
  copyCondition(data: {}) {
    this.options.conditionMechanismSkeleton?.push(JSON.parse(JSON.stringify(data)));
  }

  getConditionCount(data: unknown, index: number) {
    // console.log(
    //   (
    //     (this.options.conditionMechanismSkeleton as {}[])[index] as {
    //       innerConditionArray: {}[];
    //     }
    //   ).innerConditionArray.length
    // );
    const counter = (
      (this.options.conditionMechanismSkeleton as {}[])[index] as {
        innerConditionArray: {}[];
      }
    )?.innerConditionArray?.length;
    const mainCounter = (data as { dataList: {}[] })?.dataList?.length;
    // console.log(
    //   (data as { dataList: {}[] }).dataList.length ===
    //     (data as { innerConditionArray: {}[] })?.innerConditionArray?.length
    // );
    // console.log(Number(counter) === Number(mainCounter) ? false : true);
    return Number(counter) >= Number(mainCounter) ? false : true;
    // return true;
  }
  deleteSubData(data: unknown, index: number) {
    console.log(index);

    console.log(
      (data as { innerConditionArray: {}[] }).innerConditionArray,
      index
    );

    // (data as { innerConditionArray: {}[] }).innerConditionArray.splice(
    //   0,
    //   index
    // );

    // delete (data as { innerConditionArray: {}[] }).innerConditionArray[index];
    // console.log(
    (data as { innerConditionArray: {}[] }).innerConditionArray.splice(
      index,
      1
    );
    if((data as { innerConditionArray: {}[] }).innerConditionArray.length > index){
    (data as { innerConditionArray: {}[] }).innerConditionArray[index] = {
      ...Object?.assign(
        (data as { innerConditionArray: {}[] }).innerConditionArray[index] as {
          condition: string;
        },
        { condition: 'AND', value: [] }
      ),
    };
  }
    (data as { innerConditionArray: {}[] }).innerConditionArray[index-1] = {
      ...Object?.assign(
        (data as { innerConditionArray: {}[] }).innerConditionArray[index-1] as {

          condition: boolean;
        },
        { condition: false, value: [] }
      ),
    };
    // );
  }
}
