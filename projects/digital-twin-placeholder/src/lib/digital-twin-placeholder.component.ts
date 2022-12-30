import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-digital-twin-placeholder',
  templateUrl: 'lib-digital-twin.component.html',
  styles: [],
})
export class DigitalTwinPlaceholderComponent implements OnInit {
  @Input() placeHolderConfig: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.placeHolderConfig);
  }
}
