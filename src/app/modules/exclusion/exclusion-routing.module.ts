import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExclusionComponent } from "./exclusion.component";

const routes: Routes = [
  { path: "", component: ExclusionComponent },
  {
    path: "approve",
    component: ExclusionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExclusionRoutingModule {}
