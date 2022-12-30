import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiffTestingComponent } from './features/diff-testing/diff-testing.component';
import { RecompilationComponent } from './features/recompilation/recompilation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'project',
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./modules/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./modules/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/project/project.module').then(
        (m) => m.CreateprojectModule
      ),
  },
  {
    path: 'flow',
    loadChildren: () =>
      import('./modules/twin-flow/twin-flow.module').then(
        (m) => m.TwinFlowModule
      ),
  },
  { path: 'condition', loadChildren: () => import('./modules/condition/condition.module').then(m => m.ConditionModule) },
  { path: 'card', loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule) },
  { path: 'exclusion', loadChildren: () => import('./modules/exclusion/exclusion.module').then(m => m.ExclusionModule) },
  { path: 'admin', loadChildren: () => import('./modules/care_management/program/program.module').then(m => m.ProgramModule) },
  { path: 'member', loadChildren: () => import('./modules/care_management/member/member.module').then(m => m.MemberModule) },
  { path: 'analytics', loadChildren: () => import('./modules/care_management/analytics/analytics.module').then(m => m.AnalyticsModule) },
  { path: 'policy', loadChildren: () => import('./modules/intelliauth/card-extraction/card-extraction.module').then(m => m.CardExtractionModule) },
  // { path: 'recompile', component: RecompilationComponent },
  // {path: 'diff', component: DiffTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
