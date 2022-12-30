import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectComponent } from "./project.component";

const routes: Routes = [
  { path: "", component: ProjectComponent },
  { path: "create", component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateprojectRoutingModule {}
