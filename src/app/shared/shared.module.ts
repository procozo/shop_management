import { TooltipModule } from "primeng/tooltip";
import { TopNavComponent } from "./../features/reusable/top-nav/top-nav.component";
import { DropdownModule } from "primeng/dropdown";
import { BadgeModule } from "primeng/badge";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from "./../features/reusable/search/search.component";
import { HeaderTextComponent } from "./../features/reusable/header-text/header-text.component";
import { CommonModule } from "@angular/common";
import { DigitalTwinCardModule } from "./../../../projects/digital-twin-card/src/lib/digital-twin-card.module";
import { SidebarModule } from "primeng/sidebar";
import { NotificationComponent } from "./../features/notification/notification.component";
import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppInterceptor } from "../intercepter/http/service/app.interceptor";
import { ProjectService } from "../services/project/project.service";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { OutputConsoleComponent } from "../components/reusable/output-console/output-console.component";
import { NgxEchartsModule } from "ngx-echarts";
import { LegatoTableComponent } from "../features/reusable/legato-table/legato-table.component";
import { MultiSelectModule } from "primeng/multiselect";
import { SliderModule } from "primeng/slider";
import { TableModule } from "primeng/table";
import { FormComponent } from "../features/care_management/form/form.component";
import { CalendarModule } from "primeng/calendar";
import { ChartComponent } from "../features/reusable/chart/chart.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CanvasComponent } from "../feature/common/canvas/canvas.component";
import { SearchDataModuleFeatureComponent } from "../feature/common/search-data-module-feature/search-data-module-feature.component";
import { HtmlSanitizePipe } from "../pipes/html-sanitize.pipe";
import { HighlightDirective } from "../directives/highlight.directive";
import { CustomHighlightDirective } from "../directives/custom-highlight.directive";
@NgModule({
  declarations: [
    NotificationComponent,
    HeaderTextComponent,
    HighlightDirective,
    SearchComponent,
    TopNavComponent,
    OutputConsoleComponent,
    LegatoTableComponent,
    FormComponent,
    ChartComponent,
    CanvasComponent,
    SearchDataModuleFeatureComponent,
    HtmlSanitizePipe,
    CustomHighlightDirective,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    DigitalTwinCardModule,
    BadgeModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    AccordionModule,
    TooltipModule,
    ProgressBarModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    ProgressBarModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    TableModule,
    SliderModule,
    MultiSelectModule,
    AutoCompleteModule,
    ToastModule,
    ProgressBarModule,
    CalendarModule,
  ],
  exports: [
    NotificationComponent,
    HeaderTextComponent,
    SearchComponent,
    DropdownModule,
    BadgeModule,
    AccordionModule,
    TopNavComponent,
    TooltipModule,
    ProgressBarModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    OutputConsoleComponent,
    LegatoTableComponent,
    TableModule,
    SliderModule,
    MultiSelectModule,
    ToastModule,
    ProgressBarModule,
    FormComponent,
    CalendarModule,
    ChartComponent,
    CanvasComponent,
    SearchDataModuleFeatureComponent,
    HtmlSanitizePipe,
    HighlightDirective,
    CustomHighlightDirective,
  ],
  providers: [
    ProjectService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [],
})
export class SharedModule {}
