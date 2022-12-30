import { TooltipModule } from "primeng/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DigitalTwinSideNavComponent } from "./digital-twin-side-nav.component";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { BadgeModule } from "primeng/badge";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [DigitalTwinSideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    BadgeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DigitalTwinSideNavComponent],
})
export class DigitalTwinSideNavModule {}
