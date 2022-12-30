import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges,
} from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Directive({
  selector: "[highlight]",
})
export class HighlightDirective implements OnChanges {
  @Input("highlight") searchTerm!: string;
  @Input() caseSensitive = false;
  @Input() customClasses = "";

  @HostBinding("innerHtml")
  content: string = "";
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    // this.content =
    //   "Subject: Intensive Programs for Pediatric Feeding Disorders";
    console.log(this.el?.nativeElement);
    if (this.el?.nativeElement) {
      if ("searchTerm" in changes || "caseSensitive" in changes) {
        const text = (this.el.nativeElement as HTMLElement).textContent;
        // console.log(text);
        if (this.searchTerm === "") {
          this.content = text as string;
        } else {
          const regex = new RegExp(
            this.searchTerm,
            this.caseSensitive ? "g" : "gi"
          );
          // console.log(text);
          const newText = text?.replace(regex, (match: string) => {
            return `<span class="highlight ${this.customClasses}">${match}</span>`;
          });
          console.log(newText);

          this.content = text as string;
          // const sanitzed = this.sanitizer.sanitize(
          //   SecurityContext.HTML,
          //   this.el.nativeElement
          // );
          // console.log(sanitzed);
          // const sanitized
          // this.content = this.el.nativeElement;
          // this.content = sanitzed as string;
        }
      }
    }
  }
}
