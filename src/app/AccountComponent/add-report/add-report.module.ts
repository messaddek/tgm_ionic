import { LayoutSidemenuModule } from './../../LayoutSidemenu/LayoutSidemenu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddReportPage } from './add-report.page';

const routes: Routes = [
  {
    path: '',
    component: AddReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddReportPage]
})
export class AddReportPageModule {}
