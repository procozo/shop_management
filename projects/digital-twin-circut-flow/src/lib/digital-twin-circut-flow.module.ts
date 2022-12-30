import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { TooltipModule } from "primeng/tooltip";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { HeaderTextComponent } from "src/app/features/reusable/header-text/header-text.component";
import { DigitalTwinCircutFlowComponent } from "./digital-twin-circut-flow.component";

import { DialogModule } from "primeng/dialog";
import { InputSwitchModule } from "primeng/inputswitch";
import { FormsModule } from "@angular/forms";
import { ProgressBarModule } from "primeng/progressbar";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";
@NgModule({
  declarations: [DigitalTwinCircutFlowComponent],
  imports: [
    ButtonModule,
    CommonModule,
    DropdownModule,
    TooltipModule,
    DigitalTwinCardModule,
    BadgeModule,
    DialogModule,
    InputSwitchModule,
    FormsModule,
    ProgressBarModule,
    MessagesModule,
    ToastModule,
  ],
  exports: [DigitalTwinCircutFlowComponent],
})
export class DigitalTwinCircutFlowModule {}
