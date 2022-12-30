import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExclusionRoutingModule } from "./exclusion-routing.module";
import { ExclusionComponent } from "./exclusion.component";
import { SearchDataModuleFeatureComponent } from "src/app/feature/common/search-data-module-feature/search-data-module-feature.component";
import { CanvasComponent } from "src/app/feature/common/canvas/canvas.component";
import { LegatoTableComponent } from "src/app/features/reusable/legato-table/legato-table.component";
import { DigitalTwinSideNavModule } from "projects/digital-twin-side-nav/src/public-api";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from "primeng/accordion";
import { DigitalTwinAccordionModule } from "projects/digital-twin-accordion/src/public-api";
import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ToastModule } from "primeng/toast";
import { ProgressBarModule } from "primeng/progressbar";
import { HeaderTextComponent } from "src/app/features/reusable/header-text/header-text.component";
import { SearchBusinessExclusionComponent } from "src/app/features/module/search-business-exclusion/search-business-exclusion.component";
import { SharedModule } from "src/app/shared/shared.module";
import { LegatoTimlineComponent } from "src/app/features/module/legato-timline/legato-timline.component";
@NgModule({
  declarations: [
    ExclusionComponent,
    SearchBusinessExclusionComponent,
    LegatoTimlineComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExclusionRoutingModule,
    DigitalTwinSideNavModule,
    DigitalTwinCardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    DigitalTwinAccordionModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    ToastModule,
    ProgressBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExclusionModule {}
