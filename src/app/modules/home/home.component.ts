import { Header, Card } from 'src/app/external_modules/@digital-twin/interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { ResponseAPI, ResponseConfig } from 'src/app/interfaces/project';
import { HomeConfigData } from './HomeConfig';
import { HelperData } from 'src/app/config/constant.data.config';

@Component({
  selector: 'zf-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerOptions: Header | undefined;
  servicesList: Card[] | undefined;
  totalProjects!: number;
  pageData: HomeConfigData = HelperData.applicationVariables.HOME;

  constructor(public router: Router, public homeService: HomeService) { }

  ngOnInit(): void {
    this.headerOptions = {
      headerProjectName: '',
      headerProjectDescription: '',
      isSearchAvailable: false,
      isProfile: false,
      isSideNav: false,
      isBorder: false,
      notificationCount: 10
    };
    this.servicesList = [
      {
        icon: 'assets/icons/service_white.svg',
        iconTitle: 'Failed',
        title: 'Re-Compilation Service ',
        count: undefined,
        description: 'You can re-complile windows based FMUs ',
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
        statusHolderIcon: 'assets/icons/switch-holder.svg',
        actionItem: true
      },
      {
        icon: 'assets/icons/service_white.svg',
        iconTitle: 'Failed',
        title: 'Re-Compilation Service ',
        count: undefined,
        description: 'You can re-complile windows based FMUs ',
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
        statusHolderIcon: 'assets/icons/switch-holder.svg',
        actionItem: true
      },
      {
        icon: 'assets/icons/service_white.svg',
        iconTitle: 'Failed',
        title: 'Re-Compilation Service ',
        count: undefined,
        description: 'You can re-complile windows based FMUs ',
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
        statusHolderIcon: 'assets/icons/switch-holder.svg',
        actionItem: true
      },
      {
        icon: 'assets/icons/service_white.svg',
        iconTitle: 'Failed',
        title: 'Re-Compilation Service ',
        count: undefined,
        description: 'You can re-complile windows based FMUs ',
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
        statusHolderIcon: 'assets/icons/switch-holder.svg',
        actionItem: true
      },
      {
        icon: 'assets/icons/service_white.svg',
        iconTitle: 'Failed',
        title: 'Re-Compilation Service ',
        count: undefined,
        description: 'You can re-complile windows based FMUs ',
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
        statusHolderIcon: 'assets/icons/switch-holder.svg',
        actionItem: true
      }
    ];

    this.fetchTotalProjetcts();
  }

  fetchTotalProjetcts() {
    try {
      this.homeService.fetchTotalProjetsCount().then((res) => {
        console.log(res)
        this.totalProjects = (res as ResponseAPI)?.data?.totalProjects || 0;
      })
    } catch (error) {
    }

    // this.homeService.fetchTotalProjetsCount().subscribe({
    //   next:(res:ResponseAPI) => {
    //   console.log('fetch response', res);
    //   this.totalProjects = res?.data?.totalProjects || 0;
    // },
    // error: (err: ResponseAPI) => {
    //   console.log(err);
    // }
    // })
  }

  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
