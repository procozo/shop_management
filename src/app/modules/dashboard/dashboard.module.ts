import { DigitalTwinPlaceholderModule } from './../../../../projects/digital-twin-placeholder/src/lib/digital-twin-placeholder.module';
import { DigitalTwinSideNavModule } from './../../../../projects/digital-twin-side-nav/src/lib/digital-twin-side-nav.module';
import { DigitalTwinCardModule } from './../../../../projects/digital-twin-card/src/lib/digital-twin-card.module';

import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BadgeModule } from 'primeng/badge';
import { SharedModule } from 'src/app/shared/shared.module';
import { DigitalTwinCircutFlowModule } from 'projects/digital-twin-circut-flow/src/public-api';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DigitalTwinCardModule,
    DigitalTwinSideNavModule,
    BadgeModule,
    ButtonModule,
    DigitalTwinPlaceholderModule,
    SharedModule,
    DigitalTwinCircutFlowModule
  ],
})
export class DashboardModule { }
