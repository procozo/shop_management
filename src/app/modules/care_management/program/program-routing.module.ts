import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProgramAdminComponent } from "src/app/features/care_management/page/program-admin/program-admin.component";
import { ProgramCreateComponent } from "src/app/features/care_management/page/program-create/program-create.component";
import { ProgramComponent } from "./program.component";

const routes: Routes = [
  { path: "", component: ProgramComponent },
  { path: "admin_dashboard", component: ProgramAdminComponent },
  { path: "create_project", component: ProgramCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramRoutingModule {}
