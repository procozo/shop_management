import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Card } from "src/app/interfaces/project";

@Component({
  selector: "LDIGITAL-legato-table",
  templateUrl: "./legato-table.component.html",
  styleUrls: ["./legato-table.component.scss"],
})
export class LegatoTableComponent implements OnInit {
  loading: boolean = true;

  activityValues: number[] = [0, 100];
  selectedItems!: {}[];

  @Input() data!: [] | Card[];
  @Output() rowEmmiter = new EventEmitter();
  headersData!: string[];

  constructor() {}

  ngOnInit() {
    console.log(this.data);

    this.headersData = Object.keys((this.data as {}[])[0]);
    console.log(this.headersData);
  }

  clear(table: any) {
    table.clear();
  }
  /**
   *
   * @param data
   * @returns
   */
  getValue(data?: unknown) {
    console.log(
      ((data as { target: HTMLInputElement }).target as HTMLInputElement).value
    );
    return ((data as { target: HTMLInputElement }).target as HTMLInputElement)
      .value;
  }
  handleRowData(data: unknown) {
    try {
      this.rowEmmiter.emit(data);
    } catch (error) {}
  }
}
