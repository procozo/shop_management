import { Injectable, resolveForwardRef } from "@angular/core";
import { select } from "@ngrx/store";
import { Subject } from "rxjs";
import {
  CheckBoxInterface,
  TaskList,
  Card,
  AssignedElements,
  ResponseAPI,
} from "src/app/interfaces/project";
import { ChangeSchemaService } from "./utility/change-schema.service";

@Injectable({
  providedIn: "root",
})
export class LogicHelperService {
  projectName = new Subject<string>();
  projectStep = new Subject<number>();

  constructor(public schema: ChangeSchemaService) {}

  /**
   *
   * @param event
   * @param selectedTasks
   * @returns
   */
  selectCardEventHandler(event: CheckBoxInterface, selectedTasks: Card[]) {
    return new Promise<Card[]>((resolve) => {
      if (event.checked) {
        const result = selectedTasks.find(
          (el: Card) => el.title === event.data.title
        );
        if (!result) {
          selectedTasks.push(event.data);
        }
      } else {
        const index = selectedTasks.findIndex(
          (el: Card) => el.title === event.data.title
        );
        selectedTasks.splice(index, 1);
      }
      resolve(selectedTasks);
    });
  }

  /**
   *
   * @param tasksList
   * @param selectedTasks
   * @param assignedElements
   * @param selectedModels
   * @param selectedParams
   * @param selectedTests
   * @returns
   */
  viewCheckedElements(
    tasksList: TaskList[],
    selectedTasks: Card[],
    assignedElements: AssignedElements,
    selectedModels: Card[],
    selectedParams: Card[],
    selectedTests: Card[]
  ) {
    return new Promise<AssignedElements>((resolve) => {
      for (const task of tasksList) {
        const filterResult = selectedTasks.filter(
          (selectedTask: Card) =>
            selectedTask.title === task.title && task.isAssigned
        );
        if (filterResult.length > 0) {
          selectedModels = [];
          const models = task.assignedElements?.models || [];
          this.showCheckedElements(
            models,
            assignedElements.models || [],
            selectedModels
          ).then((res: Card[]) => {
            selectedModels = res;
            selectedParams = [];
            const params = task.assignedElements?.parameters || [];
            this.showCheckedElements(
              params,
              assignedElements.parameters || [],
              selectedParams
            ).then((resp: Card[]) => {
              selectedParams = resp;
              selectedTests = [];
              const tests = task.assignedElements?.tests || [];
              this.showCheckedElements(
                tests,
                assignedElements.tests || [],
                selectedTests
              ).then((respo: Card[]) => {
                selectedTests = respo;
                const obj = {
                  models: selectedModels,
                  parameters: selectedParams,
                  tests: selectedTests,
                };
                resolve(obj);
              });
            });
          });
        }
      }
    });
  }

  /**
   *
   * @param storeelements
   * @param assignedElements
   * @param selectedElements
   * @returns
   */
  showCheckedElements(
    storeelements: Card[],
    assignedElements: Card[],
    selectedElements: Card[]
  ) {
    return new Promise<Card[]>((resolve) => {
      storeelements.forEach((assignEle: Card) => {
        assignedElements?.map((model: Card) => {
          if (model.title === assignEle.title) {
            model.isChecked = assignEle.isChecked;
            selectedElements.push(model);
          }
        });
      });
      resolve(selectedElements);
    });
  }

  /**
   *
   * @param selectedModels
   * @param card
   * @returns
   */
  selectedElementOnAccordion(selectedModels: Card[], card: CheckBoxInterface) {
    return new Promise<Card[]>((resolve) => {
      if (card.data.isChecked) {
        const result = selectedModels.find(
          (el: Card) => el.title === card.data.title
        );
        if (!result) {
          selectedModels.push(card.data);
        }
      } else {
        const element = selectedModels.findIndex(
          (el: Card) => el.title === card.data.title
        );
        if (element > -1) {
          selectedModels[element].isChecked = false;
          selectedModels.splice(element, 1);
        }
      }
      resolve(selectedModels);
    });
  }

  /**
   *
   * @param task
   * @param selectedTasks
   * @param selectedModels
   * @returns
   */
  checkAssignedElements(
    task: Card[],
    selectedTasks: TaskList[],
    selectedModels: Card[]
  ) {
    return new Promise<Card[]>((resolve) => {
      if (selectedModels.length === 0) {
        selectedModels = task || [];
      } else {
        if (selectedTasks.length > 1) {
          task.forEach((elem: Card) => {
            const result = selectedModels.find(
              (model: Card) => model.title === elem.title
            );
            if (!result) {
              selectedModels.push(elem);
            }
          });
        }
      }
      resolve(selectedModels);
    });
  }

  setStore(projectData: ResponseAPI) {
    return new Promise((resolve, reject) => {
      // this.schema.changeSchema()
      resolve(projectData);
    });
  }
  changeType(data: {}[]) {
    return new Promise((resolve, reject) => {
      resolve(this.schema.changeSchema(data as {}[]));
    }).catch((err) => console.error(err));
  }

  /**
   *
   * @param data
   * @returns
   */

  convertDataToAssignedCardData(data: Card) {
    try {
      const returnData = data?.elementList;
      if (returnData) {
        Object.assign(returnData, {
          models: JSON.parse(
            JSON.stringify((returnData as AssignedElements)?.models)
          ).map((el: Card) =>
            Object.assign(el, {
              isDelete: true,
              type: "Models",
              isSingleCheckUI: true,
              deleteIcon: "assets/icons/delete.svg",
              isMultiple: false,
            } as Card)
          ),
          parameters: JSON.parse(
            JSON.stringify((returnData as AssignedElements)?.parameters)
          ).map((el: Card) =>
            Object.assign(el, {
              isDelete: true,
              type: "Parameters",
              isSingleCheckUI: true,
              deleteIcon: "assets/icons/delete.svg",
              isMultiple: false,
            } as Card)
          ),
          tests: JSON.parse(
            JSON.stringify((returnData as AssignedElements)?.tests)
          ).map((el: Card) =>
            Object.assign(el, {
              isDelete: true,
              type: "Tests",
              isSingleCheckUI: true,
              deleteIcon: "assets/icons/delete.svg",
              isMultiple: false,
            } as Card)
          ),
        });

        return returnData;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  async getImageDimensions(file: string) {
    return new Promise(function (resolved, rejected) {
      var i = new Image();
      i.src = file;
      i.onload = function () {
        resolved({ w: i.width, h: i.height });
      };
      i.src = file;
    });
  }
}
