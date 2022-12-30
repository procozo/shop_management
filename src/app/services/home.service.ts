import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ResponseAPI } from 'src/app/interfaces/project';
import { environment } from 'src/environments/environment';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  fetchTotalProjetsCount() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.ENV_URL + Constant.constats.endpoints.TOTAL_PROJECT_COUNT).subscribe((res: ResponseAPI) => {
        if (res?.statusCode === 200) {
          resolve(res)
        }
        resolve(false)
      })
    }).catch(err => console.error(err))
  }




  // fetchProjectInfo(id: string | undefined) {
  //   const obj = {
  //     projectID: id
  //   }
  //   return this.http.put('https://ui-service-twin-builder.azurewebsites.net/details', obj);
  // }

  createProject(reqObj: Project) {
    return this.http.post('https://ui-service-twin-builder.azurewebsites.net/project', reqObj);
  }



  getSearchResults(reqObj: { type: string; attributes: { [x: string]: string | string[]; }; }) {
    return this.http.post('https://search-api-service-twin-builder.azurewebsites.net/api/getModelsParameters', reqObj);
  }





}
