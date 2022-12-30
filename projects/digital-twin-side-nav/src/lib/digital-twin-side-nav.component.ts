import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "LDIGITALAction-side-nav",
  templateUrl: "digital-twin-side-nav.html",
  styleUrls: ["style.scss"],
})
export class DigitalTwinSideNavComponent implements OnInit {
  @Input() model: any;
  @Input() isFullView: boolean | undefined;
  @Input() headerOptions: any;
  @Output() emitNotificationEvent: any = new EventEmitter();
  @Output() backToCreateEvent = new EventEmitter();
  constructor(public route: Router) { }

  ngAfterViewInit() { }
  ngOnInit() {
    console.log("init");
    this.model = [
      {
        label: "Create Shop",
        icon: "assets/icons/pg_admin.svg",
        isSelected: true,
        selectedIcon: "assets/icons/pg_admin-black.svg",
        url: "/admin/create_project",
      },
      // {
      //   label: "Member",
      //   icon: "assets/icons/member_white.svg",
      //   isSelected: false,
      //   selectedIcon: "assets/icons/member.svg",
      //   url: "/member/search_member",
      // },
      // {
      //   label: "Analytics",
      //   icon: "assets/icons/analytics_white.svg",
      //   isSelected: false,
      //   selectedIcon: "assets/icons/analytics.svg",
      //   url: "/analytics/program",
      // },
    ];
    console.log(this.model);
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = <HTMLDivElement>event.target;
    if (event.code === "Enter" || event.code === "Space") {
      nodeElement.click();
      event.preventDefault();
    }
  }

  backToCreate() {
    this.backToCreateEvent.emit(1);
  }
  navigate(data: { url: string; isSelected: boolean; label: string }) {
    data.isSelected = true;
    this.model.map((el: { isSelected: boolean; label: string }) =>
      el.label === data.label ? (el.isSelected = true) : (el.isSelected = false)
    );
    this.route.navigateByUrl(data.url);
  }
}
