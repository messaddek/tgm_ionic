import { ProgressBarModule } from './../../progress-bar/progress-bar.module';
import { FileUploadComponent } from './../../file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVideoPage } from './add-video.page';
import { LayoutSidemenuModule } from 'src/app/LayoutSidemenu/LayoutSidemenu.module';
import { FileUploadModule } from 'src/app/file-upload/file-upload.module';

const routes: Routes = [
  {
    path: '',
    component: AddVideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutSidemenuModule,
    IonicModule,
    FileUploadModule,
    ProgressBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVideoPage]
})
export class AddVideoPageModule {}
