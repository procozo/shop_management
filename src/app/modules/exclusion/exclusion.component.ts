import { Component, OnInit } from "@angular/core";
import { TextForm } from "src/app/interfaces/project";
import { ProjectService } from "src/app/services/project/project.service";
import { PageConfig } from "../project/project.component";

@Component({
  selector: "LDIGITAL-exclusion",
  templateUrl: "./exclusion.component.html",
  styleUrls: ["./exclusion.component.scss"],
})
export class ExclusionComponent implements OnInit {
  isAPICall = false;
  public pageConfig!: PageConfig;
  formControlObject!: TextForm[];
  searchDataObject: [] = [];
  constructor(public projectService: ProjectService) {
    this.pageConfig = {
      isNotification: false,
      stepNumber: 1,
      notificationsList: [],
    };
  }

  ngOnInit(): void {
    try {
      this.formControlObject = [
        {
          title: "Select LOB ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Select LOB",
          isClear: true,
          isMultiple: true,
          isText: false,
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
          title: "Select Product Type ",
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
          title: "Select Fund Type ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Select LOB",
          isClear: true,
          isMultiple: true,
          isText: false,
          dataList: [],
        },
      ];
      this.projectService.getMetaData().then((data) => {
        const metaData = ((data as { result: {} }).result as { metadata: [] })
          .metadata;
        console.log((metaData as {}[])[0] as { LOB: [] });
        ((metaData as {}[])[0] as { LOB: [] }).LOB.map((res) => {
          this.formControlObject[0].dataList?.push({
            title: res,
            code: res,
          });
        });
        ((metaData as {}[])[0] as { PlanStateSold: [] }).PlanStateSold.map(
          (res) => {
            this.formControlObject[1].dataList?.push({
              title: res,
              code: res,
            });
          }
        );

        ((metaData as {}[])[0] as { Product_Type: [] }).Product_Type.map(
          (res) => {
            this.formControlObject[2].dataList?.push({
              title: res,
              code: res,
            });
          }
        );
        ((metaData as {}[])[0] as { Fund_Type: [] }).Fund_Type.map((res) => {
          this.formControlObject[3].dataList?.push({
            title: res,
            code: res,
          });
        });
      });

      this.projectService.searchExclusionData().then((_exclusion) => {
        console.log(
          (_exclusion as { result: { SearchData: [] } }).result.SearchData
        );
        this.searchDataObject = (
          _exclusion as { result: { SearchData: [] } }
        ).result.SearchData;
      });
    } catch (error) {}
  }
  rowEmmiterHandler(data: unknown) {
    console.log(data);
  }
}
