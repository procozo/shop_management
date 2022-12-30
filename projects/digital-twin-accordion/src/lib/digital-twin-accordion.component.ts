import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Paginator } from "primeng/paginator";
import { filter } from "rxjs";
import { Card } from "src/app/interfaces/project";
import { AssignedElements } from "./interface";

import { MenuItem } from "primeng/api";
@Component({
  selector: "zf-digital-twin-accordion",
  templateUrl: "digital-twin-accordion.component.html",
  styleUrls: ["digital-twin-accordion.component.scss"],
})
export class DigitalTwinAccordionComponent implements OnInit, OnChanges {
  switchData: boolean = true;
  items!: MenuItem[];
  @Input() data!: any;
  @Output() sendDataEmmiter = new EventEmitter();
  constructor() {
    this.items = [
      {
        label: "Options",
        items: [
          {
            label: "Edit",
            icon: "pi pi-refresh",
            command: () => {},
          },
        ],
      },
    ];
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges() {}
  sendDataTOChild(data: any) {
    this.sendDataEmmiter.emit(data);
  }
}
