import { Component, OnInit } from "@angular/core";
import { Card, PlaceHolder } from "src/app/interfaces/project";

@Component({
  selector: "LDIGITAL-member-info",
  templateUrl: "./member-info.component.html",
  styleUrls: ["./member-info.component.scss"],
})
export class MemberInfoComponent implements OnInit {
  memberDetailsArray: PlaceHolder[] = [];
  constructor() {}

  ngOnInit(): void {
    this.memberDetailsArray = [
      {
        title: "Member Name",
        value: "Vinayak",
      },
      {
        title: "member state",
        value: ["NA"],
      },
      {
        title: "Other",
        value: ["NA"],
      },
      {
        title: "DOB",
        value: ["NA"],
      },
      {
        title: "Program",
        value: ["PG10011", "PG7876876"],
      },
    ];
  }
}
