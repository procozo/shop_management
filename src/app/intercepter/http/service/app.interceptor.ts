import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { MessageService } from "primeng/api";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";
import { ProjectService } from "src/app/services/project/project.service";
import { Store } from "@ngrx/store";
import * as LDIGITALActions from "../../../actions/lDigital.store.action";
// import { do } from "rxjs/operators";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    public store: Store,
    private messageService: MessageService,
    public httpServiceData: ProjectService
  ) {
    console.log("interceptor");
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("Intercepting", this.httpServiceData.$httpValue);
    this.store.dispatch(
      new LDIGITALActions.CreateErrorLoad({
        httpErrorGlobal: false,
      })
    );

    const started = Date.now();
    let errorValue: boolean;
    return next.handle(request).pipe(
      tap({
        next: (event) =>
          (errorValue = event instanceof HttpResponse ? false : true),
        error: (error) => (errorValue = error),
      }),

      finalize(() => {
        const msg = errorValue;
        if (msg) {
          console.log(this.messageService);
          this.messageService.add({
            severity: "error",
            summary: `Something went wrong 2`,
          });
          // alert('error')
          this.store.dispatch(
            new LDIGITALActions.CreateErrorLoad({
              httpErrorGlobal: true,
            })
          );
          // this.httpServiceData.setHttpErrors(true)
          // this.httpServiceData.moveSubject.next('true')
          console.log(msg);
        }
      })
    );
  }
}
