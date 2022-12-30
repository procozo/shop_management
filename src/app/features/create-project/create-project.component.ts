import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperData } from 'src/app/config/constant.data.config';
import { Project, ProjectCreationOptions, ProjectInfo } from 'src/app/interfaces/project';
import { HomeService } from 'src/app/services/home.service';
import { CreateProjectConfigData } from './CreateProjectConfig';

@Component({
  selector: 'zf-digital-twin-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  @Input() options!: ProjectCreationOptions;
  @Output() projectCreateEvent = new EventEmitter();
  projectCreateForm: FormGroup = new FormGroup({});
  uniqueProjectName!: boolean;
  pageData: CreateProjectConfigData = HelperData.applicationVariables.createProject;

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.projectCreateForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(null),
    });
  }
  /**
   *
   * @param $event
   */
  checkProjectName($event: KeyboardEvent): void {
    try {
      this.options?.projectList?.map((res: ProjectInfo) => {
        String(($event.target as HTMLInputElement)?.value).toLowerCase() ===
          String(res?.name).toLowerCase()
          ? (this.uniqueProjectName = true)
          : (this.uniqueProjectName = false);
      });
    } catch (error) {

    }

  }
  get f() {
    return this.projectCreateForm.controls;
  }
  submitForm() {
    console.log(this.projectCreateForm);
    if (this.projectCreateForm.valid) {
      // this.projectCreateEvent.emit(this.projectCreateForm?.value);
      const reqObj = {
        name: this.projectCreateForm?.value.title,
        description: this.projectCreateForm?.value.description
      }
      this.projectCreateEvent.emit(reqObj)
    }
  }
}
