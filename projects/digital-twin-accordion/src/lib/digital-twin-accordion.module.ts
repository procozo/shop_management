import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DigitalTwinCardModule } from "projects/digital-twin-card/src/public-api";
import { DigitalTwinAccordionComponent } from "./digital-twin-accordion.component";
import { AccordionModule } from "primeng/accordion";
import { FormsModule } from "@angular/forms";
import { PaginatorModule } from "primeng/paginator";
import { MenuModule } from "primeng/menu";
@NgModule({
  declarations: [DigitalTwinAccordionComponent],
  imports: [
    DigitalTwinCardModule,
    CommonModule,
    AccordionModule,
    FormsModule,
    PaginatorModule,
    MenuModule,
  ],
  exports: [DigitalTwinAccordionComponent],
})
export class DigitalTwinAccordionModule {}
