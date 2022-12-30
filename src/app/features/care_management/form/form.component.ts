import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { TextForm } from "src/app/interfaces/project";

@Component({
  selector: "LDIGITAL-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() formControlObject!: TextForm[];
  @ViewChild("date") daterange!: unknown;
  date1: string[] = [];
  filteredList: string[] = [];

  @Output() triggerFormData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.formControlObject);
  }
  ngAfterViewInit() {
    console.log(this.formControlObject);
    this.formControlObject = this.formControlObject;
  }
  changeDataInput(data: TextForm, e: HTMLInputElement | unknown, type: string) {
    try {
      switch (type) {
        case "text":
          // console.log(e as { target: { value: number | string | {}[] } });
          data.value = (
            e as { target: { value: number | string | {}[] } }
          ).target.value;
          // console.log(this.formControlObject);
          break;
        case "multi":
          // console.log(e as { value: {}[] });
          data.value = (e as { value: {}[] }).value;
          console.log("data", data);
          break;
        case "auto":
          // console.log(e as { value: {}[] });
          data.value = e as string;
          break;
        case "dt":
          console.log(e)
          data.value = e as any;
          break;
      }
    } catch (error) { }
  }
  selectData(form: TextForm, data: unknown) {
    // this.date1.push(data as string);
    // console.log(data);
    // console.log(this.daterange, this.date1);
    // if (this.date1.length >= 2) {
    //   (this.daterange as any).toggle();
    // }
  }
  search(form: any, event: any) {
    console.log('form', form.dataList, 'event', event);
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < form.dataList?.length; i++) {
      let data = form.dataList[i];
      if (data.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(data);
      }
    }

    this.filteredList = filtered;
  }

  submitForm() {
    console.log(this.formControlObject)
    // this.triggerFormData.emit(
    //   this.formControlObject.map((el) => {
    //     el.value;
    //   })
    // );
    this.triggerFormData.emit(
      this.formControlObject.map((el: TextForm) => {
        if (el?.value) return { title: el.key, value: el?.value };
        return null;
      })
    );
    console.log(
      this.formControlObject.map((el: TextForm) => {
        if (el?.value) return { title: el.key, value: el?.value };
        return null;
      })
    );
  }
  clearProgram(data: any) {
    data.value = "";
  }
}
