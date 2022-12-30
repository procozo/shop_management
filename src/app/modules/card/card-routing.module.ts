import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponentFeature } from "src/app/features/intelliatuh/page/card/card.component";
import { CardComponent } from "./card.component";

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "extraction", component: CardComponentFeature },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
