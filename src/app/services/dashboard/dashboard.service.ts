import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ResponseAPI } from 'src/app/interfaces/project';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @returns
   */

  manageProjects() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.ENV_URL + Constant.constats.endpoints.MANAGE_PROJECTS).subscribe((res: ResponseAPI) => {
        if (res?.statusCode === 200) {
          resolve(res)
        }
        resolve(false)
        reject(false)
      })
    }).catch(err => console.error(err))
  }



  // fetchProjectInfo(id: string | undefined) {
  //   const obj = {
  //     projectID: id
  //   }
  //   return this.http.put('https://ui-service-twin-builder.azurewebsites.net/details', obj);
  // }

  // createProject(reqObj: Project) {
  //   return this.http.post('https://ui-service-twin-builder.azurewebsites.net/project', reqObj);
  // }

  // getSearchMetaData() {
  //   return this.http.get('https://search-api-service-twin-builder.azurewebsites.net/api/getMetaData');
  // }

  // getSearchResults(reqObj: { type: string; attributes: { [x: string]: string | string[]; }; }) {
  //   return this.http.post('https://search-api-service-twin-builder.azurewebsites.net/api/getModelsParameters', reqObj);
  // }
}
