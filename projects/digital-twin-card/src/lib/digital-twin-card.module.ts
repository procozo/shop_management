import { NgModule } from "@angular/core";
import { DigitalTwinCardComponent } from "./digital-twin-card.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { CommonModule } from "@angular/common";
import { InputSwitchModule } from "primeng/inputswitch";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from "primeng/tooltip";
import { RadioButtonModule } from "primeng/radiobutton";
import { MenuModule } from "primeng/menu";

import { InputTextareaModule } from "primeng/inputtextarea";
import { ProgressBarModule } from "primeng/progressbar";
@NgModule({
  declarations: [DigitalTwinCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputSwitchModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    RadioButtonModule,
    MenuModule,
    InputTextareaModule,
    ProgressBarModule,
  ],
  exports: [DigitalTwinCardComponent],
})
export class DigitalTwinCardModule {}
