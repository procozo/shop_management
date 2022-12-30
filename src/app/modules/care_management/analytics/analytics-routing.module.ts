import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProgramAnalyticsComponent } from "src/app/features/care_management/page/program-analytics/program-analytics.component";
import { AnalyticsComponent } from "./analytics.component";

const routes: Routes = [
  { path: "", component: AnalyticsComponent },
  { path: "program", component: ProgramAnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
