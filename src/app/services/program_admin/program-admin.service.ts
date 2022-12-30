import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { number } from "echarts";
import { Subject } from "rxjs";
import { Constant } from "src/app/constant/constant";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProgramAdminService {
  programData$: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  /**
   * cm program metadata api
   */
  getProgramConfig() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.ENV_URL +
            Constant.constats.cmStratificationEndPoints.CM_CONFIG
        )
        .subscribe((res: unknown) => {
          console.log("api response", res);
          if ((res as { status_code: number | String })?.status_code === 200) {
            resolve(res);
          }
          resolve(res);
          reject(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   * program search api call
   */
  getPrograms(data: unknown) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.ENV_URL +
            Constant.constats.cmStratificationEndPoints.CM_PROGRAM_DETAILS,
          data
        )
        .subscribe((res: any) => {
          if (res?.status_code === 200) {
            resolve(res);
          }
          resolve(res);
          reject(false);
        });
    }).catch((err) => console.error(err));
  }

  deleteProgram(program_id: number) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      body: {
        program_id: program_id,
      },
    };
    return new Promise((resolve, reject) => {
      this.http
        .delete(
          `${environment.ENV_URL}${Constant.constats.cmStratificationEndPoints.CM_PROGRAM}`,
          options
        )
        .subscribe((res: any) => {
          if (res?.status_code === 200) {
            resolve(res);
          }
          resolve(res);
          reject(false);
        });
    }).catch((err) => console.error(err));
  }
  /**
   *  program create
   */
  programCreate(payload: {}) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.ENV_URL +
            Constant.constats.cmStratificationEndPoints.CM_PROGRAM,
          payload
        )
        .subscribe((res: any) => {
          console.log("api response", res);

          if (res?.status_code === 200) {
            resolve(res);
          }
          resolve(res);
          reject(false);
        });
    }).catch((err) => console.error(err));
  }
}
