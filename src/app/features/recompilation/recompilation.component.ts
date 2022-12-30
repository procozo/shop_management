import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Data } from 'src/app/config/data';
import { AssignedElements, CheckBoxInterface, TaskList, TestResults, Card, TasksDropDown, MultiSelect, PlaceHolder } from 'src/app/interfaces/project';


@Component({
  selector: 'ZF-recompilation',
  templateUrl: './recompilation.component.html',
  styleUrls: ['./recompilation.component.scss']
})
export class RecompilationComponent implements OnInit {

  constructor() { }
  @Input() resultConfigList!: Card[];
  @Input() OsImageData!: Card[];
  isAssignment: boolean | undefined;
  configData: CheckBoxInterface[] = [];
  result!: string;
  bntStyle!: string;
  ngOnInit(): void {
    this.resultConfigList = [];
    this.OsImageData = []
  }

  changeConfigurationHandler(item: CheckBoxInterface) {
    if (item.type === 'changeConfiguration') {
      this.isAssignment = true;
      this.result = item.data.title
    }
  }

  sideBarClose() {
    this.isAssignment = false;
  }

  selectedOs(item: CheckBoxInterface) {
    this.isAssignment = false;

  }

}