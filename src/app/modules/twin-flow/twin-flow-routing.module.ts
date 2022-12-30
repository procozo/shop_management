import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwinFlowComponent } from './twin-flow.component';

const routes: Routes = [{ path: '', component: TwinFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwinFlowRoutingModule { }
