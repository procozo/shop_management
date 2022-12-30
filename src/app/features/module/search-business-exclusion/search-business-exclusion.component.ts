import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TextForm } from "src/app/interfaces/project";

@Component({
  selector: "LDIGITAL-search-business-exclusion",
  templateUrl: "./search-business-exclusion.component.html",
  styleUrls: ["./search-business-exclusion.component.scss"],
})
export class SearchBusinessExclusionComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    proc_code: new FormControl(null),
    policy_code: new FormControl(null),
    policy_url: new FormControl(null),
  });
  @Input() formControlObject!: TextForm[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.formControlObject);
  }
}
