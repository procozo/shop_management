import { Injectable, SkipSelf } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AssignElementPayload,
  ComplianceCheck,
  ConfigurationActions,
  Project,
  ResponseAPI,
  TaskList,
} from "src/app/interfaces/project";
import { environment } from "src/environments/environment";
import { Constant } from "src/app/constant/constant";
import { Observable, Subject } from "rxjs";
import { HelperData } from "src/app/config/constant.data.config";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  @SkipSelf() subject = new Subject();
  constructor(private http: HttpClient) { }

  $httpValue = false;

  /**
   *
   * @returns
   */
  setHttpErrors(data: boolean) {
    console.log(data);
    if (data) {
      // alert(data)
      this.$httpValue = true;
      this.subject.next(data);
    }
    // this.subject.next(data)
    // this.moveSubject.next(data);
  }

  getAccessToken(contentId: any): Observable<any> {
    const clientId = Constant.constats.auth?.policyUsername;
    const clientSecret = Constant.constats.auth?.policyPassword;
    const basicToken = btoa(clientId + ":" + clientSecret);
    console.log(`${Constant.constats.auth.policyurl}${contentId}`);
    const headers = {
      "Content-Type": "text/html",
      Authorization: `Basic ${basicToken}`,
      Accept: "text/html",
    };
    console.log(headers);
    return this.http.get(`${Constant.constats.auth.policyurl}${contentId}`, {
      headers,
      responseType: "text",
    });
  }

  async getPolicy(data: string) {
    // getPolicyDispute;
    try {
      return new Promise((resolve, reject) => {
        this.http
          .post(
            `${environment.POLICY_URL}${Constant.constats.IntelliauthEndPoints.POLICY}`,
            {
              Policy_ID: "Timely_filing",
              zip: "",
            }
          )
          .subscribe((result: any) => {
            resolve(result);
          });
      }).catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param data
   * @returns
   */
  createProject(data: unknown) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.ENV_URL + Constant.constats.endpoints.CREATE_PROJECT,
          data,
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }


  updateProject(data: unknown) {
    console.log(data)
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.ENV_URL + Constant.constats.endpoints.UPDATE_SHOP,
          data,
        )
        .subscribe((res: ResponseAPI) => {
          // if (res?.statusCode === 200) {
          resolve(res);
          // }
          // resolve(false);
        });
    }).catch((err) => console.error(err));
  }
  getAllShops() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.ENV_URL + Constant.constats.endpoints.GET_ALL_SHOP,
        )
        .subscribe((res: ResponseAPI) => {
          // if (res?.statusCode === 200) {
          resolve(res);
          // }
          // resolve(false);
        });
    }).catch((err) => console.error(err));
  }



  /**
   *
   * @param data
   * @param projectId
   * @returns
   */
  assignElement(data: AssignElementPayload, projectId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .put(
          environment.ENV_URL +
          Constant.constats.endpoints.CREATE_PROJECT +
          "/" +
          projectId +
          Constant.constats.endpoints.ASSIGN_ELEMENT,
          data
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param projectId
   * @returns
   */
  getProjectDetails(projectId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.ENV_URL +
          "/" +
          projectId +
          Constant.constats.endpoints.DETAILS_PROJECT
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   * search with normal SEDM
   * @param projectId
   * @returns
   */
  searchData(data: {}) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.SEARCH_URL + Constant.constats.endpoints.SEARCH, data)
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param projectId
   * @returns
   */
  getSearchMetaData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.SEARCH_URL + Constant.constats.endpoints.SEARCH_META_DATA
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param projectId
   * @returns
   */
  createTaskToProject(data: TaskList, projectId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.ENV_URL + Constant.constats.endpoints.CREATE_SHOP,
          data
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param projectId
   * @returns
   */
  getProjectShop(data: TaskList) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.ENV_URL + Constant.constats.endpoints.GET_SHOP, data)
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param data
   * @param projectId
   * @param taskId
   * @returns
   */
  assignProjectToTask(data: TaskList, projectId: string, taskId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .put(
          environment.ENV_URL +
          Constant.constats.endpoints.CREATE_PROJECT +
          "/" +
          projectId +
          Constant.constats.endpoints.TASK +
          "/" +
          taskId +
          "/" +
          Constant.constats.endpoints.ASSIGN_TO_TASK,
          data
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   * Search with mars
   * @param data
   * @returns
   */
  searchDataMars(data: {}) {
    return new Promise((resolve, reject) => {
      // this.http.get(environment.MARS_URL + Constant.constats.marsEndpoints.SEARCH).subscribe((res: ResponseAPI) => {
      //   // if (res?.statusCode === 200) {
      //   resolve(res)
      //   // }
      //   resolve(false)
      // })
      console.log("Mars Data", HelperData.marsData);
      resolve({ data: HelperData.marsData.data.filter((el) => !el.excluded) });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param data
   * @returns
   */
  marsCompatibleCheck(data: {}) {
    return new Promise<ResponseAPI>((resolve, reject) => {
      this.http
        .post(
          environment.CONFIG_URL +
          Constant.constats.marsEndpoints.COMPATIBLE_CHECK,
          data
        )
        .subscribe((res: ResponseAPI) => {
          resolve(res);
        });
    }).catch((err) => console.error(err));
  }

  fetchJobStatus(id: string) {
    return new Promise<ResponseAPI>((resolve, reject) => {
      this.http
        .get(
          environment.CONFIG_URL +
          Constant.constats.marsEndpoints.JOB_STATUS +
          "/" +
          id
        )
        .subscribe((res: ResponseAPI) => {
          resolve(res);
        });
    }).catch((err) => console.error(err));
  }

  marsSimulate(data: {}) {
    return new Promise<ResponseAPI>((resolve, reject) => {
      this.http
        .post(
          environment.CONFIG_URL + Constant.constats.marsEndpoints.SIMULATE,
          data
        )
        .subscribe((res: ResponseAPI) => {
          resolve(res);
        });
    }).catch((err) => console.error(err));
  }

  totalJobIds(id: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.CONFIG_URL +
          "/" +
          id +
          Constant.constats.marsEndpoints.JOBID_DATA
        )
        .subscribe((res: ResponseAPI) => {
          if (res?.statusCode === 200) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  validateComplianceCheck(validateData: ComplianceCheck) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.CONFIG_URL + Constant.constats.endpoints.FMU_VALIDATE,
          validateData
        )
        .subscribe((res: ConfigurationActions) => {
          if (res) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  async validateSmokeTest(validateData: ComplianceCheck) {
    try {
      return await new Promise((resolve, reject) => {
        this.http
          .post(
            environment.CONFIG_URL + Constant.constats.endpoints.SMOKE_TEST,
            validateData
          )
          .subscribe((res: ConfigurationActions) => {
            if (res) {
              resolve(res);
            }
            resolve(false);
          });
      });
    } catch (err) {
      return console.error(err);
    }
  }

  CISVValidation(validateData: {}) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.CONFIG_URL + Constant.constats.endpoints.CISV_TEST,
          validateData
        )
        .subscribe((res: ConfigurationActions) => {
          if (res) {
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @returns
   */
  getMetaData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.INTELLIAUTH_URL +
          Constant.constats.IntelliauthEndPoints.META_DATA
        )
        .subscribe((res: ConfigurationActions) => {
          if (res) {
            // if (
            //   (res as { result?: string | number }).result as { status_code : nu} ===
            //   200
            // ) {
            //   resolve(res);
            // }
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }

  searchExclusionData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          environment.INTELLIAUTH_URL +
          Constant.constats.IntelliauthEndPoints.SEARCH_DATA
        )
        .subscribe((res: ConfigurationActions) => {
          if (res) {
            // if (res.status_code === 200) {
            //   resolve(res);
            // }
            resolve(res);
          }
          resolve(false);
        });
    }).catch((err) => console.error(err));
  }
}
