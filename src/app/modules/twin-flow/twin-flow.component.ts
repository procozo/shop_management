import { Component, OnInit } from '@angular/core';
import { HelperData } from 'src/app/config/constant.data.config';

@Component({
  selector: 'ZF-twin-flow',
  templateUrl: './twin-flow.component.html',
  styleUrls: ['./twin-flow.component.scss']
})
export class TwinFlowComponent implements OnInit {
  flowData!: {};
  constructor() { }

  ngOnInit(): void {
    this.flowData = HelperData.modelDataINtegration.models
  }
}
