import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "primeng/api";
import { CardDataObject } from "../../intelliatuh/page/card/card.component";

@Component({
  selector: "LDIGITAL-extraction",
  templateUrl: "./extraction.component.html",
  styleUrls: ["./extraction.component.scss"],
})
export class ExtractionComponent implements OnInit {
  @Input() showDescisionLogic = false;
  @Input() showCodeDetails = false;
  @Input() currentScenarioCard!: CardDataObject;
  @Input() items!: MenuItem[];
  @Output() handleCardsEmit = new EventEmitter();
  @Output() getEntitiesEmit = new EventEmitter();
  @Output() setCurrentObjectForSpeedDial = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleCards(data: {}[] | {}) {
    // console.log(data);
    return (data as []).length > 0
      ? (data as CardDataObject[])
      : [data as CardDataObject];
  }
}
