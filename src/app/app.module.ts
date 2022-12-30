import { DigitalTwinSideNavModule } from "./../../projects/digital-twin-side-nav/src/lib/digital-twin-side-nav.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// import { reducers } from './store.index';
import { environment } from "../environments/environment";
import { LDIGITALReducer } from "./reducers/LdigitalReducer";
import { AppState, LDIGITALStore } from "./interfaces/store";
import { Actions } from "./actions/lDigital.store.action";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeService } from "./services/home.service";
import { ToastModule } from "primeng/toast";
import { MemberInfoComponent } from "./features/reusable/member-info/member-info.component";
import { ProgramAnalyticsComponent } from "./features/care_management/page/program-analytics/program-analytics.component";
import { ExtractionComponent } from "./features/reusable/extraction/extraction.component";
import { ExtractionNestedComponent } from "./features/reusable/extraction-nested/extraction-nested.component";
import { TreeViewComponent } from "./features/intelliauth/page/tree-view/tree-view.component";
import { HtmlSanitizePipe } from "./pipes/html-sanitize.pipe";
import { HighlightDirective } from "./directives/highlight.directive";
import { CustomHighlightDirective } from "./directives/custom-highlight.directive";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ToastModule,
    DigitalTwinSideNavModule,
    StoreModule.forRoot({
      store: LDIGITALReducer,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
        // if you want to change complexe objects and that we have. We need to disable these settings
        // change strictStateImmutability, strictActionImmutability
        strictStateImmutability: false, // set this to false
        strictActionImmutability: true,
      },
    } as ActionReducerMap<LDIGITALStore, Actions>),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
