import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";
import { DigitalTwinSideNavModule } from "projects/digital-twin-side-nav/src/public-api";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { HeaderTextComponent } from "src/app/features/reusable/header-text/header-text.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SearchDataModuleFeatureComponent } from "src/app/feature/common/search-data-module-feature/search-data-module-feature.component";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from "primeng/accordion";
import { CanvasComponent } from "src/app/feature/common/canvas/canvas.component";
import { DigitalTwinAccordionModule } from "projects/digital-twin-accordion/src/public-api";
import { LegatoTableComponent } from "src/app/features/reusable/legato-table/legato-table.component";
import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
// import { MultiSelectModule } from "primeng/multiselect";
import { SpeedDialModule } from "primeng/speeddial";
import { InputSwitchModule } from "primeng/inputswitch";
import { CardComponentFeature } from "src/app/features/intelliatuh/page/card/card.component";
import { ExtractionComponent } from "src/app/features/reusable/extraction/extraction.component";
import { ExtractionNestedComponent } from "src/app/features/reusable/extraction-nested/extraction-nested.component";

@NgModule({
  declarations: [
    CardComponent,
    CardComponentFeature,
    ExtractionComponent,
    ExtractionNestedComponent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    DigitalTwinSideNavModule,
    DigitalTwinCardModule,
    SharedModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    DigitalTwinAccordionModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    SpeedDialModule,
    InputSwitchModule,
  ],
})
export class CardModule {}
