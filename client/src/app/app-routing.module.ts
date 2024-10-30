import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from './homeview/homeview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateviewComponent } from './createview/createview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,

    children: [
      {
        path: 'home',
        component: HomeviewComponent,
      },
      {
        path: 'create',
        component: CreateviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
