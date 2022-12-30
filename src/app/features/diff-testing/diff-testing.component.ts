import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/config/data';
import { Card } from 'src/app/interfaces/project';


@Component({
  selector: 'ZF-diff-testing',
  templateUrl: './diff-testing.component.html',
  styleUrls: ['./diff-testing.component.scss']
})
export class DiffTestingComponent implements OnInit {

  constructor() { }
  @Input() resultConfigList!: Card[];
  @Input() simulatedFiles!: Card[];
  isAssigned!: boolean;

  ngOnInit(): void {
    this.resultConfigList = [];
    this.simulatedFiles = [];

  }

  sideBarClose() {
    this.isAssigned = false;
  }


}
