import { Component } from "@angular/core";
import {
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  Router,
} from "@angular/router";
import { PageConfig } from "src/app/external_modules/@digital-twin/interfaces";
import { LogicHelperService } from "./helpers/logic-helper.service";
import { DEService } from "./interfaces/DE";
import { Header } from "./interfaces/project";

@Component({
  selector: "zf-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "digital-twin-component-library";
  currentUrl!: string;
  public headerOptions!: Header;
  deService!: DEService;
  public pageConfig!: PageConfig;
  projectName!: string;
  constructor(public router: Router, public helper: LogicHelperService) {
    this.headerOptions = {
      headerProjectName: "Shop",
      headerProjectDescription: "Condition Profile Agent",
      isSearchAvailable: false,
      isProfile: false,
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
      // this.updateHeaderText(this.currentUrl);
    });
    // this.fetchCurrentPath();
  }
  /***@notification call
   */

  notificationSubscription(): void {
    this.pageConfig.isNotification = true;
  }

  fetchCurrentPath() {
    this.router.events.subscribe((event: Event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      // console.log('this.router.url', this.currentUrl);
      this.updateHeaderText(this.currentUrl);
    });
  }

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
