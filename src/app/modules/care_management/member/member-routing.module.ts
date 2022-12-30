import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchMemberComponent } from "src/app/features/care_management/page/search-member/search-member.component";
import { MemberComponent } from "./member.component";

const routes: Routes = [
  { path: "", component: MemberComponent },
  { path: "search_member", component: SearchMemberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
