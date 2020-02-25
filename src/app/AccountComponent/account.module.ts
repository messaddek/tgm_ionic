import { AddVideoPage } from './add-video/add-video.page';
import { AddReportPage } from './add-report/add-report.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppModule } from '../app.module';
import { AccountPage } from './account.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { AddReportPageModule } from './add-report/add-report.module';
import { AddVideoPageModule } from './add-video/add-video.module';

const routes: Routes = [
  { path: '', component: AccountPage },
  {
    path: 'add-video',
    loadChildren: './add-video/add-video.module#AddVideoPageModule'
  },
  {
    path: 'add-report',
    loadChildren: './add-report/add-report.module#AddReportPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountPage]
})
export class AccountModule {}
