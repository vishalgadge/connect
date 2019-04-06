import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactMy } from './contactMy.page';

const routes: Routes = [
  {
    path: 'contactMy',
    component: ContactMy
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactMy],
  exports:[ContactMy]
})
export class ContactMyPageModule {}
