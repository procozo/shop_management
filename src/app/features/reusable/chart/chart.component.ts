import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "LDIGITAL-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  @Input() chartOption!: {};
  constructor() {}

  ngOnInit(): void {}
}
