import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HelperData } from "src/app/config/constant.data.config";
import { SearchData } from "./SearchConfig";

@Component({
  selector: "LDIGITAL-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor() {}
  @Input() value!: string;
  @Output() seachEventEmmiter = new EventEmitter();
  pageData: SearchData = HelperData.applicationVariables.searchComponent;

  ngOnInit(): void {
    return undefined;
  }
  inputDebounce(event: KeyboardEvent) {
    this.saveInput((event.target as HTMLInputElement)?.value);
  }

  propogation(e: MouseEvent) {
    e.stopPropagation();
  }

  saveInput(value: string) {
    this.seachEventEmmiter.emit(value);
  }
}
