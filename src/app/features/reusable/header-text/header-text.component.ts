import { Component, Input, OnInit } from '@angular/core';
import { PlaceHolder } from 'src/app/interfaces/project';

@Component({
  selector: 'LDIGITAL-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {
  @Input() data: PlaceHolder | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
