import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HelperData } from 'src/app/config/constant.data.config';
import { TasksDropDown } from 'src/app/interfaces/project';
import { TopNavData } from './TopNavDataConfig';
@Component({
  selector: 'zf-digital-twin-tb-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnChanges {
  @Output() selectedWorkFlow = new EventEmitter();
  @Input() workflowSteps!: TasksDropDown[];
  activeStep!: string;
  pageData: TopNavData = HelperData.applicationVariables.topNavMainBlock;
  constructor() { }


  ngOnInit(): void {
    console.warn('you are inside component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('workflow steps', this.workflowSteps);
    this.trackStep(this.workflowSteps[0]);
  }

  trackStep(step: TasksDropDown) {
    this.activeStep = step.code || '';
    this.selectedWorkFlow.emit(step.code);
  }
}
