import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'LDIGITAL-search-data-module-feature',
  templateUrl: './search-data-module-feature.component.html',
  styleUrls: ['./search-data-module-feature.component.scss']
})
export class SearchDataModuleFeatureComponent implements OnInit {
  searchForm:FormGroup = new FormGroup({
    proc_code: new FormControl(null),
    policy_code:   new FormControl(null),
    policy_url:   new FormControl(null),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
