import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponentFeature } from "src/app/features/intelliatuh/page/card/card.component";
import { CardComponentFeaturePolicy } from "src/app/features/intelliatuh/page/card_policy/card.component";
import { CardExtractionComponent } from "./card-extraction.component";

const routes: Routes = [
  { path: "", component: CardExtractionComponent },
  { path: "cards", component: CardComponentFeaturePolicy },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardExtractionRoutingModule {}
