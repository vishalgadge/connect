import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactAll } from './contactAll.page';

const routes: Routes = [
  {
    path: 'contactAll',
    component: ContactAll
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactAll],
  exports: [ContactAll]
})
export class ContactAllPageModule { }
