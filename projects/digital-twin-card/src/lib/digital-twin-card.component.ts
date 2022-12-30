import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Card, CheckBoxInterface } from "./Card";
@Component({
  selector: "LDIGITAL-card",
  templateUrl: "digital-twin-card.component.html",
  styleUrls: ["digital-twin-card.component.scss"],
})
export class DigitalTwinCardComponent implements OnInit, OnChanges {
  constructor() { }
  @Input() cardOptions!: Card;
  textArea!: string;
  @Output() deleteEvent = new EventEmitter();
  @Output() assignElementEvent = new EventEmitter();
  @Output() runTestEvent = new EventEmitter();
  @Output() selectCardEvent = new EventEmitter();
  @Output() knowMoreEvent = new EventEmitter();
  @Output() changeConfiguration = new EventEmitter();
  @Output() infoClickEmmiter = new EventEmitter();
  @Output() triggerEngProfiles = new EventEmitter();
  @Output() getCarddetailsTrigger = new EventEmitter();
  checkedCard!: CheckBoxInterface;
  checked!: boolean;
  getCarddetails(card: Card) {
    this.getCarddetailsTrigger.emit(card)
  }

  ngOnInit(): void {
    this.textArea = this.cardOptions.description
      ? this.cardOptions.description
      : "";
  }
  getAuthorFirstletter(data: string) {
    return data[0];
  }
  /* To emit the engagement profile description */
  printModified(cardData: any) {
    this.triggerEngProfiles.emit(cardData.description);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cardOptions = { ...this.cardOptions };
    // console.log('on card', this.cardOptions);
  }
  infoClickEmmiterHandler($event: Card) {
    this.infoClickEmmiter.emit($event);
  }

  checkboxevent(event: Event) {
    // event.stopPropagation()
    Object.assign(this.cardOptions, {
      isChecked: (event as unknown as HTMLInputElement).checked,
    });
    const checkedCard = {
      checked: (event as unknown as HTMLInputElement).checked,
      type: "assign",
      data: { ...this.cardOptions },
    };
    this.selectCardEvent.emit(checkedCard);
  }

  deleteCard($event: Event) {
    const deleteCard = {
      checked: true,
      type: "delete",
      data: { ...this.cardOptions },
      event: $event,
    };
    this.selectCardEvent.emit(deleteCard);
  }

  assignElementsClick(e: Event) {
    try {
      e.stopPropagation();
      const assignCard = {
        checked: true,
        type: "assignElements",
        data: { ...this.cardOptions },
      };
      this.selectCardEvent.emit(assignCard);
      console.log("assignCard:", assignCard);
    } catch (error) { }
  }

  runTestCard() {
    const assignCard = {
      checked: true,
      type: "Run test",
      data: { ...this.cardOptions },
    };
    this.selectCardEvent.emit(assignCard);
  }

  changeConfigCard() {
    const changeConfigCardData = {
      checked: true,
      type: "changeConfiguration",
      data: { ...this.cardOptions },
    };
    this.selectCardEvent.emit(changeConfigCardData);
  }

  // Added a function to select the particular os type
  selectedOsType() {
    const osSelectedType = {
      checked: true,
      type: "osSelectedTypeData",
      data: { ...this.cardOptions },
    };
    this.selectCardEvent.emit(osSelectedType);
  }
  getTemlateName(name: string) {
    if (name.toLowerCase().substring(0, 4) === "mars") {
      return true;
    } else {
      return false;
    }
  }
}
