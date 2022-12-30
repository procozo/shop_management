import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { DEService } from "src/app/interfaces/DE";
import { Card, Header, TextForm } from "src/app/interfaces/project";
export interface PageConfig {
  isNotification: boolean;
  notificationsList?: Card[];
  stepNumber: number;
  pageId: number;
}

@Component({
  selector: "LDIGITAL-program",
  templateUrl: "./program.component.html",
  styleUrls: ["./program.component.scss"],
})
export class ProgramComponent implements OnInit {
  currentUrl!: string;
  public headerOptions!: Header;
  deService!: DEService;
  public pageConfig!: PageConfig;
  projectName!: string;
  constructor(public router: Router, public helper: LogicHelperService) {
    this.headerOptions = {
      headerProjectName: "Intelliauth",
      headerProjectDescription: "Condition Profile Agent",
      isSearchAvailable: true,
      isProfile: true,
      isBorder: true,
      notificationCount: 10,
    };

    this.pageConfig = {
      isNotification: false,
      stepNumber: 2,
      notificationsList: [],
      pageId: 1,
    };
    // logic for sidenav
    this.headerOptions.isSideNav = this.pageConfig.pageId === 1 ? false : true;

    this.deService = {
      title: "damage service",
      description: "data",
      dataInput: [
        {
          expect: ["xlsx"],
          icon: "",
          isMultiple: true,
        },
        {
          expect: ["csv"],
          icon: "",
          isMultiple: true,
        },
      ],
      document: "",
    };
    this.helper.projectName.subscribe((res) => {
      // console.log('project name subscribe', res);
      this.projectName = res;
      this.updateHeaderText(this.currentUrl);
    });
    // this.fetchCurrentPath();
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  /***@notification call
   */

  notificationSubscription(): void {
    this.pageConfig.isNotification = true;
  }

  // fetchCurrentPath() {
  //   this.router.events.subscribe((event: Event) => {
  //     // console.log(event);
  //     if (event instanceof NavigationEnd) {
  //       this.currentUrl = event.url;
  //     }
  //     // console.log('this.router.url', this.currentUrl);
  //     this.updateHeaderText(this.currentUrl);
  //   });
  // }

  updateHeaderText(url: string) {
    switch (url) {
      case "/home":
        return this.headerOptions;
      case "/dashboard":
        return this.headerOptions;
      case "/project":
        this.headerOptions = {
          headerProjectName: this.projectName
            ? "Intelliauth"
            : "Condition Profile Agent ",
          headerProjectDescription: "Satisfaction",
          isSearchAvailable: true,
          isProfile: true,
          isBorder: true,
          notificationCount: 10,
          icon: this.projectName ? "assets/icons/edit.svg" : "",
        };
        return this.headerOptions;
      default:
        this.headerOptions = {
          headerProjectName: "Intelliauth",
          headerProjectDescription: "Condition Profile agent",
          isSearchAvailable: true,
          isProfile: true,
          isBorder: true,
          notificationCount: 10,
          isSideNav: true,
        };
        return this.headerOptions;
    }
  }

  backToCreateHandler(event: number) {
    this.helper.projectStep.next(event);
  }
}
