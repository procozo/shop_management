import { Header, PlaceHolder } from 'src/app/external_modules/@digital-twin/interfaces';
import { Component, OnInit } from '@angular/core';
import { AppState, LDIGITALStore } from 'src/app/interfaces/store';
import { Store } from '@ngrx/store';
import { elementAt, Observable } from 'rxjs';
import { Card, PageConfig, ProjectInfo, ResponseAPI } from 'src/app/interfaces/project';
import * as LDIGITALActions from '../../actions/lDigital.store.action';
import { HomeService } from 'src/app/services/home.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { HelperData } from 'src/app/config/constant.data.config';
import { PageConfigData } from './pageConfig';
import { DashboardConfigData } from './DashBoardConfig';
@Component({
  selector: 'zf-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService, ProjectService]
})
export class DashboardComponent implements OnInit {
  // cardOptionData: Card | undefined;
  // cardOptionData2: Card | undefined;
  // cardOptionData3: Card | undefined;
  // cardOptionData4: Card | undefined;

  // cardOptionData5: Card | undefined;
  // cardOptionData6: Card | undefined;
  // cardOptionData7: Card | undefined;
  headerOptions: Header | undefined;
  overviewData: Card[] | undefined;
  recentProjects: Card[] | undefined;
  projectsArray: Card[] = [];
  placeHolderConfig: PlaceHolder | undefined;

  applicationStepNo: number | undefined = 1;
  storeData!: Observable<LDIGITALStore>
  public pageConfig!: PageConfig;
  allProjects: ProjectInfo[] = [];
  isAPICall = false;
  totalProjectCount: string | number | undefined;
  pageData: DashboardConfigData = HelperData.applicationVariables.dashboard;

  constructor(private store: Store<AppState>, public router: Router, private homeService: HomeService, private dashboardService: DashboardService, private projectService: ProjectService) { }
  /**
   *
   */
  ngOnInit(): void {
    console.log(this.pageData)

    this.pageConfig = {
      isNotification: false,
      stepNumber: 3,
      notificationsList: []

    };

    this.storeData = this.store.select('store');
    this.storeData.subscribe((res) => {
      // console.log(res)
      if (this.pageConfig?.notificationsList)
        this.pageConfig.notificationsList = res?.notificationList;
      // console.log(this.pageConfig?.notificationsList, res?.notificationList)
    })
    // console.log(this.storeData)

    this.store.dispatch(new LDIGITALActions.UpdateStore({ title: 'new name', notificationList: [] }))
    this.store.dispatch(new LDIGITALActions.AddNotification({
      notificationList: [{
        icon: 'assets/icons/failed.svg',
        iconTitle: 'Failed',
        title: 'Testing_twin_builder_data_011',
        description: 'Failed Sanity testing',
        isCreatedAt: '12/12/12',
      }]
    }))

    this.getAllProjects();


    this.headerOptions = {
      headerProjectName: 'LDIGITAL',
      headerProjectDescription: 'LDIGITAL application description',
      isSearchAvailable: true,
      isProfile: true,
      isSideNav: true,
      isBorder: true,
      notificationCount: 10,
      notificationConfig: {
        isNotification: false,
        notificationsList: [
          {
            icon: 'assets/icons/failed.svg',
            iconTitle: 'Failed',
            title: 'Testing_twin_builder_data_011',
            count: undefined,
            description: 'The first card lib demo',
            isDelete: true,
            isStatus: true,
            isCreatedAt: '12/12/12',
            isExport: false,

            isTest: undefined,
            isElement: undefined,
            author: undefined,
            version: undefined,
            deleteIcon: 'assets/icons/delete.svg',
            isMultiple: false,
            statusHolderIcon: 'assets/icons/switch-holder.svg'
          },

        ]
      }
    };

    this.placeHolderConfig = {
      title: 'Sanity test',
      description: 'Testing is in progress',
      icon: 'assets/icons/failed.svg'
    };


  }

  getAllProjects() {
    try {
      this.projectsArray = [];

      /**
       * Fetch_the_all_projects
       */
      this.isAPICall = true;
      this.dashboardService.manageProjects().then((res) => {
        this.isAPICall = false;
        if (res) {
          this.allProjects = (res as ResponseAPI)?.data?.projectList || [];
          // console.log(this.allProjects)

          this.overviewData = [
            {
              icon: 'assets/icons/project.svg',
              iconTitle: 'Failed',
              title: 'Total projects',
              titleOpacity: 0.8,
              count: Number(this.allProjects.length),
              description: undefined,
              isDelete: false,
              isStatus: false,
              isCreatedAt: undefined,
              isExport: false,
              subData: [],
              isTest: undefined,
              isElement: undefined,
              author: undefined,
              version: undefined,
              deleteIcon: 'assets/icons/delete.svg',
              isMultiple: false,
              statusHolderIcon: 'assets/icons/switch-holder.svg'
            },
          ];

          this.store.dispatch(new LDIGITALActions.TotalProjects({
            totalProjects: Object.assign([], JSON.parse(JSON.stringify(this.allProjects)))
          }))
          this.allProjects.forEach((el: ProjectInfo) => {
            let iconh;
            switch (el.projectStage) {
              case 'In Progress':
                iconh = 'assets/icons/inprogress.svg';
                break;
              case 'Completed':
                iconh = 'assets/icons/complete.svg';
                break;
              case 'Draft':
                iconh = 'assets/icons/draft.svg';
                break;
              case 'Failed':
                iconh = 'assets/icons/failed.svg';
                break;
              default:
                break;
            }
            const obj = {
              icon: iconh,
              iconTitle: el.projectStage,
              title: el?.name || 'No Title',
              description: el.description?.substring(0, 20) + '...',
              isDelete: true,
              isStatus: true,
              isCreatedAt: el.createdOn?.split(' ')[0] || 'Created Date',
              isExport: false,
              statusValue: el.status !== 'Disabled' ? true : false,
              deleteIcon: 'assets/icons/delete.svg',
              isMultiple: false,
              statusHolderIcon: 'assets/icons/switch-holder.svg',
              id: el._id,
              apiData: el
            }
            this.projectsArray?.push(obj);
          })
        }
      }).catch((err) => console.log(err))


    } catch (error) {

    }

  }


  /**
   * recentProject
   */
  recentProject(projects: Card[]) {
    return [projects[0], projects[1]] as Card[]
  }

  /**
   * demo function which share the d value
   * @param d
   * @returns
   */
  demo(d: number) {
    return d;
  }

  /***@notification call
  */

  notificationSubscription(): void {
    this.pageConfig.isNotification = true;
  }

  navigateToProject(project: Card) {
    try {
      console.log('selected project', project);
      // this.projectService.getProjectDetails(project.id as string).then((res) => {
      //   console.log(res)
      //   this.store.dispatch(new LDIGITALActions.CreateProject({
      //     projectName: (res as ResponseAPI)?.data?.name
      //   }))
      //   this.store.dispatch(new LDIGITALActions.AddAssignElement({
      //     assignedElement: Object.assign({}, JSON.parse(JSON.stringify((res as ResponseAPI)?.data?.assignedElements)))
      //   }))
      // })
      this.router.navigateByUrl('/project?id=' + project.id)
    } catch (error) {

    }

  }
}
