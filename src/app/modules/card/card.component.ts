import { Component, OnInit } from "@angular/core";
import { Accordion } from "primeng/accordion";
@Component({
  selector: "LDIGITAL-card_component",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: [Accordion],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}
}
