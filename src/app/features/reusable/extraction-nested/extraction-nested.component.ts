import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "primeng/api";
import { CardDataObject } from "../../intelliatuh/page/card/card.component";

@Component({
  selector: "LDIGITAL-extraction-nested",
  templateUrl: "./extraction-nested.component.html",
  styleUrls: ["./extraction-nested.component.scss"],
})
export class ExtractionNestedComponent implements OnInit {
  @Input() _cData!: { card: string; logic: string };
  @Input() showDescisionLogic = false;
  @Input() showCodeDetails = false;
  @Input() currentScenarioCard!: CardDataObject;
  @Input() items!: MenuItem[];
  @Output() handleCardsEmit = new EventEmitter();
  @Output() getEntitiesEmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
