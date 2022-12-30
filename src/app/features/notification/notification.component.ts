import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageConfig } from 'src/app/interfaces/project';
import { AppState, LDIGITALStore } from 'src/app/interfaces/store';

@Component({
  selector: 'LDigital-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor(public store: Store<AppState>) { }
  @Input() notificationConfig!: PageConfig;
  storeData!: Observable<LDIGITALStore>
  ngOnInit(): void {
    console.log(this.notificationConfig)
    console.warn('you are inside component');
    this.storeData = this.store.select('store');
    this.storeData.subscribe((res) => {
      console.log(res)
      this.notificationConfig.notificationsList = res?.notificationList
    })

  }
  ngOnDestroy() {
    // this.storeData.un
  }
}
