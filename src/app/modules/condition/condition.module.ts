import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConditionRoutingModule } from "./condition-routing.module";
import { ConditionComponent } from "./condition.component";
import { DigitalTwinCircutFlowModule } from "projects/digital-twin-circut-flow/src/public-api";
import { SharedModule } from "src/app/shared/shared.module";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { ButtonModule } from "primeng/button";
import { SearchDataModuleFeatureComponent } from "src/app/feature/common/search-data-module-feature/search-data-module-feature.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ConditionComponent],
  imports: [
    CommonModule,
    ConditionRoutingModule,
    DigitalTwinCircutFlowModule,
    SharedModule,
    DigitalTwinCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ConditionModule {}
