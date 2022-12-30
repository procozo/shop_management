import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Card, CheckBoxInterface } from 'src/app/interfaces/project';
import { AppState } from 'src/app/interfaces/store';
import * as LDIGITALActions from '../../actions/lDigital.store.action';

@Component({
  selector: 'LDIGITAL-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
  allProgramCardAarray!: Card[];
  tempProgramArray!: Card[];
  searchInput!: string;
  groupedArrayCards: Card[] = [];
  selectedCardsArray: Card[] = [];
  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {

    this.store.select('store').subscribe((_store) => {
      console.log(_store)
    })
    this.allProgramCardAarray = [{
      title: 'Card : PG1234355',
      count_score: 30,
      description: 'PG1234355 | 01/09/2022',
      apiData: {
        name: 'cs_fmuInputSelectorTherm.fmu',
        id: '225385',
      },
      isMultiple: true,
      isDelete: false,
      type: 'Models',
      isSingleCheckUI: true,
      deleteIcon: 'assets/icons/delete.svg',
    }, {
      title: 'Card : PG1234355',
      count_score: 30,
      description: 'PG1234355 | 01/09/2022',
      apiData: {
        name: 'cs_fmuInputSelectorTherm.fmu',
        id: '225385',
      },
      isMultiple: true,
      isDelete: false,
      type: 'Models',
      isSingleCheckUI: true,
      deleteIcon: 'assets/icons/delete.svg',
    }, {
      title: 'Card : PG1234355',
      count_score: 30,
      description: 'PG1234355 | 01/09/2022',
      apiData: {
        name: 'cs_fmuInputSelectorTherm.fmu',
        id: '225385',
      },
      isMultiple: true,
      isDelete: false,
      type: 'Models',
      isSingleCheckUI: true,
      deleteIcon: 'assets/icons/delete.svg',
    }, {
      title: '203',
      count_score: 30,
      description: 'PG1234355 | 01/09/2022',
      apiData: {
        name: 'cs_fmuInputSelectorTherm.fmu',
        id: '225385',
      },
      isMultiple: true,
      isDelete: false,
      type: 'Models',
      isSingleCheckUI: true,
      deleteIcon: 'assets/icons/delete.svg',
    }
    ]
    this.tempProgramArray = [...this.allProgramCardAarray]
    this.store.dispatch(new LDIGITALActions.FlowDataAction({
      flowData: Object.assign({}, JSON.parse(JSON.stringify(this.tempProgramArray))),
    }))
    this.store.dispatch(new LDIGITALActions.CreateProject({
      // flowData: Object.assign({}, JSON.parse(JSON.stringify(this.tempProgramArray))),
      projectID: '31231',
      projectName: 'dasd'
    }))
  }

  searchModalsEvent(searchText: string, type: number) {
    this.searchInput = searchText;
    console.log(searchText)
    try {

      this.allProgramCardAarray = this.tempProgramArray?.filter((el: Card) => el.title.includes(searchText))

    } catch (e: unknown) {
      console.error(e)
    }
  }
  selectCardEventHandler($event: CheckBoxInterface) {
    try {
      console.log($event)
    } catch (error) {

    }
  }


}
