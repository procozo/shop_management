import { Component, Input, OnInit } from '@angular/core';
import { AssignedElements, Card } from 'src/app/interfaces/project';

@Component({
  selector: 'ZF-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.scss']
})
export class SummaryBarComponent implements OnInit {
  @Input() options!: { title?: string, subTitle?: string; data?: {} };
  definedData: { title?: string; count?: number; subTitle?: string }[] = [];
  constructor() { }

  ngOnInit(): void {
    /**
     * define the data
     */
    this.defineDataSteam(this.options?.data as AssignedElements)
  }
  /**
   *
   * @param param
   * @returns
   */
  defineDataSteam(param: AssignedElements) {
    try {
      if (!param) return;
      const tempData: { title: string; count: number; subTitle?: string }[] = [];
      Object.keys(param).forEach((res: string) => {
        console.log(res, param);
        tempData.push({
          title: res,
          count: param[res as keyof AssignedElements]?.length as number
        })
      })
      this.definedData = tempData;
      console.log(this.definedData);
    } catch (error) {

    }


  }

}
