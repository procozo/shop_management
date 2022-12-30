import { Injectable } from '@angular/core';
import { Card, TaskList, TaskListResponse } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ChangeSchemaService {

  constructor() { }

  changeSchema(_dataModal: {}[]) {
    const title = ['name'];
    const description = ['file_name']
    const newDataModel: Card[] = []
    if (_dataModal)
      _dataModal.forEach((data: { name?: string, id?: string, description?: string }) => {
        const tempData = { ...data }
        // console.log(tempData)
        newDataModel.push({
          title: data?.name as string,
          description: data?.id ? data?.id : data?.description,
          apiData: tempData
        })
      })
    // console.log(newDataModel)
    return newDataModel;
  }

  /**
   *
   * @param _dataModal
   * @returns
   */

  descriptSchema(_dataModal: Card[]) {
    // console.log(_dataModal)
    const newDataModel: { description: string, id: string, name: string }[] = []
    console.log(_dataModal)
    if (_dataModal)
      _dataModal.forEach((data: Card) => {
        newDataModel.push(data?.apiData as { description: string, id: string, name: string })
      })
    return newDataModel;
  }


  /**
   *
   * @param _dataModal
   * @returns
   */

  tasksSchemaExchange(_dataModal: {}[]) {
    const newDataModel: TaskList[] = []
    console.log(_dataModal)

    // newDataModel = [mockData as TaskList]
    _dataModal.forEach((data: TaskListResponse) => {
      console.log(data)
      if (data?.workFlows)
        console.log(Object.keys(data?.workFlows as {}).map((res: string) => [res]))
      console.log(data.workFlows)
      newDataModel.push({
        title: data.taskName,
        workflow: (Object.keys(data?.workFlows as {}).map((res: string) => res) as []).map((res) => ({ title: res, code: res })),
        isCreatedAt: data?.createdOn,
        template: data?.createTaskRequestData?.template as string,
        description: data?.taskID,
        id: data?.taskID,
        assignedElements: {
          models: this.changeSchema(((data.assignTaskRequestData) as { models: [] })?.models) ? this.changeSchema(((data.assignTaskRequestData) as { models: [] })?.models) : [],
          parameters: this.changeSchema(((data.assignTaskRequestData) as { parameters: [] })?.parameters) ? this.changeSchema(((data.assignTaskRequestData) as { parameters: [] })?.parameters) : [],
          tests: this.changeSchema(((data.assignTaskRequestData) as { tests: [] })?.tests) ? this.changeSchema(((data.assignTaskRequestData) as { tests: [] })?.tests) : [],
        },
        isAssigned: this.changeSchema(((data.assignTaskRequestData) as { models: [] })?.models).length > 0 || this.changeSchema(((data.assignTaskRequestData) as { parameters: [] })?.parameters).length > 0 || this.changeSchema(((data.assignTaskRequestData) as { tests: [] })?.tests).length > 0 ? true : false,
      })
    })
    console.log(newDataModel)
    return newDataModel;
  }

}
