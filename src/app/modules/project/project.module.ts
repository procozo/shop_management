import { ConfigurationManagementComponent } from "./../../features/configuration-management/configuration-management.component";
import { CreateTaskComponent } from "./../../features/create-task/create-task.component";
import { DigitalTwinPlaceholderModule } from "./../../../../projects/digital-twin-placeholder/src/lib/digital-twin-placeholder.module";
import { DropdownModule } from "primeng/dropdown";
import { AssignElementComponent } from "./../../features/assign-element/assign-element.component";
import { TooltipModule } from "primeng/tooltip";
import { DigitalTwinCardModule } from "../../../../projects/digital-twin-card/src/lib/digital-twin-card.module";
import { DigitalTwinSideNavModule } from "../../../../projects/digital-twin-side-nav/src/lib/digital-twin-side-nav.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateprojectRoutingModule } from "./project-routing.module";
import { ProjectComponent } from "./project.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { CreateProjectComponent } from "src/app/features/create-project/create-project.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DigitalTwinAccordionModule } from "projects/digital-twin-accordion/src/public-api";
import { MultiSelectModule } from "primeng/multiselect";
import { ToastModule } from "primeng/toast";
import { ConfirmationService } from "primeng/api";
import { SummaryBarComponent } from "src/app/features/reusable/summary-bar/summary-bar.component";
import { TableModule } from "primeng/table";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DigitalTwinCircutFlowModule } from "projects/digital-twin-circut-flow/src/public-api";
import { RecompilationComponent } from "src/app/features/recompilation/recompilation.component";
import { DiffTestingComponent } from "src/app/features/diff-testing/diff-testing.component";
import { MenuModule } from "primeng/menu";
import { MessagesModule } from "primeng/messages";
import { CheckboxModule } from "primeng/checkbox";
import { CalendarModule } from "primeng/calendar";
import { StepsModule } from "primeng/steps";
import { ConditionComponent } from "src/app/features/reusable/condition/condition.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { SliderModule } from "primeng/slider";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartComponent } from "src/app/features/reusable/chart/chart.component";

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectComponent,
    AssignElementComponent,
    CreateTaskComponent,
    ConfigurationManagementComponent,
    SummaryBarComponent,
    RecompilationComponent,
    DiffTestingComponent,
    // ConditionComponent,
  ],
  imports: [
    CommonModule,
    CreateprojectRoutingModule,
    DigitalTwinSideNavModule,
    DigitalTwinCardModule,
    SharedModule,
    SidebarModule,
    ButtonModule,
    DigitalTwinPlaceholderModule,
    FormsModule,
    ReactiveFormsModule,
    // DigitalTwinAccordionModule,
    MultiSelectModule,
    TableModule,
    ConfirmPopupModule,
    DigitalTwinCircutFlowModule,
    MenuModule,
    MessagesModule,
    CheckboxModule,
    CalendarModule,
    StepsModule,
    DropdownModule,
    AutoCompleteModule,
    SliderModule,
  ],
  providers: [ConfirmationService],
})
export class CreateprojectModule {}
