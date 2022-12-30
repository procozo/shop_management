import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "src/app/interfaces/project";
import { ProjectService } from "src/app/services/project/project.service";
export interface PageConfig {
  isNotification: boolean;
  notificationsList?: Card[];
  stepNumber: number;
}
@Component({
  selector: "LDIGITAL-card-extraction",
  templateUrl: "./card-extraction.component.html",
  styleUrls: ["./card-extraction.component.scss"],
})
export class CardExtractionComponent implements OnInit {
  public pageConfig!: PageConfig;
  isAPICall = false;
  constructor(public router: Router, public service: ProjectService) {
    this.pageConfig = {
      isNotification: false,
      stepNumber: 1,
      notificationsList: [],
    };
  }

  ngOnInit(): void {
    this.service.getAccessToken("CG-MED-37").subscribe((res) => {
      console.log(res);
    });
  }
  navigateTo(data: string) {
    this.router.navigateByUrl(data);
  }
}
