import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgramRoutingModule } from "./program-routing.module";
import { ProgramComponent } from "./program.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormComponent } from "src/app/features/care_management/form/form.component";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { ProgramAdminComponent } from "src/app/features/care_management/page/program-admin/program-admin.component";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartComponent } from "src/app/features/reusable/chart/chart.component";
import { ProgramCreateComponent } from "src/app/features/care_management/page/program-create/program-create.component";
import { ConditionComponent } from "src/app/features/reusable/condition/condition.component";
import { SliderModule } from "primeng/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { TableModule } from "primeng/table";
import { DigitalTwinSideNavModule } from "projects/digital-twin-side-nav/src/public-api";
import { AutoCompleteModule } from "primeng/autocomplete";
import { MessagesModule } from "primeng/messages";
import { AppInterceptor } from "src/app/intercepter/http/service/app.interceptor";
import { ConfirmationService } from "primeng/api";
// import * as echarts from "echarts";
@NgModule({
  declarations: [
    ProgramComponent,
    ProgramAdminComponent,
    ProgramCreateComponent,
    ConditionComponent,
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    SharedModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
    AutoCompleteModule,
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
  providers: [ConfirmationService],
})
export class ProgramModule {}
