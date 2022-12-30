import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwinFlowRoutingModule } from './twin-flow-routing.module';
import { TwinFlowComponent } from './twin-flow.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DigitalTwinCircutFlowModule } from 'projects/digital-twin-circut-flow/src/public-api';


@NgModule({
  declarations: [
    TwinFlowComponent
  ],
  imports: [
    CommonModule,
    TwinFlowRoutingModule,
    SharedModule,
    DigitalTwinCircutFlowModule
  ]
})
export class TwinFlowModule { }
