import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/interfaces/project';

@Component({
  selector: 'ZF-output-console',
  templateUrl: './output-console.component.html',
  styleUrls: ['./output-console.component.scss']
})
export class OutputConsoleComponent implements OnInit, OnChanges {
  @Input() configJobResult!: Card;
  constructor() { }

  ngOnInit(): void {
    console.log(this.configJobResult)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.configJobResult = { ...this.configJobResult };
  }

}
