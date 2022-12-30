import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { AnalyticsComponent } from "./analytics.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxEchartsModule } from "ngx-echarts";
import { SliderModule } from "primeng/slider";
import { CheckboxModule } from "primeng/checkbox";
import { TableModule } from "primeng/table";
import { DigitalTwinSideNavModule } from "projects/digital-twin-side-nav/src/public-api";
import { ProgramAnalyticsComponent } from "src/app/features/care_management/page/program-analytics/program-analytics.component";
import { MessagesModule } from "primeng/messages";
@NgModule({
  declarations: [AnalyticsComponent, ProgramAnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
    DigitalTwinCardModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SliderModule,
    CheckboxModule,
    TableModule,
    DigitalTwinSideNavModule,
    MessagesModule,
  ],
})
export class AnalyticsModule {}
