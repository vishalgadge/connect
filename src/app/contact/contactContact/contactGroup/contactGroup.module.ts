import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactGroup } from './contactGroup.page';

const routes: Routes = [
  {
    path: 'contactGroup',
    component: ContactGroup
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactGroup],
  exports: [ContactGroup]
})
export class ContactGroupPageModule { }
