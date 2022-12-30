import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MemberRoutingModule } from "./member-routing.module";
import { MemberComponent } from "./member.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormComponent } from "src/app/features/care_management/form/form.component";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { NgxEchartsModule } from "ngx-echarts";
import { SliderModule } from "primeng/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { TableModule } from "primeng/table";
import { SearchMemberComponent } from "src/app/features/care_management/page/search-member/search-member.component";
import { MemberInfoComponent } from "src/app/features/reusable/member-info/member-info.component";

@NgModule({
  declarations: [MemberComponent, SearchMemberComponent, MemberInfoComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
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
  ],
})
export class MemberModule {}
