import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactContactPage } from './contactContact.page';
import { ContactPage } from '../contact.page';
import { ContactMyPageModule } from './contactMy/contactMy.module';
import { ContactAllPageModule } from './contactAll/contactAll.module';
import { ContactGroupPageModule } from './contactGroup/contactGroup.module';

const routes: Routes = [
  {
    path: 'contactTabs',
    component: ContactContactPage,
    children: [
      // {
      //   path: '',
      //   loadChildren: './contactMy/contactMy.module#ContactMyPageModule'
      // },
      {
        path: 'contactMy',
        loadChildren: './contactMy/contactMy.module#ContactMyPageModule'
      }, 
      {
        path: 'contactGroup',
        loadChildren: './contactGroup/contactGroup.module#ContactGroupPageModule'
      },
      {
        path: 'contactAll',
        loadChildren: './contactAll/contactAll.module#ContactAllPageModule'
      }
    ]
  },
  {
    path: 'addContact',
    loadChildren: './addContact/addContact.module#AddContactPageModule'
  },
  {
    path: 'contactDetails',
    loadChildren: './contactDetails/contactDetails.module#ContactDetailsPageModule'
  },
  {
    path: '',
    redirectTo: 'contactTabs/contactMy',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ContactMyPageModule,
    ContactGroupPageModule,
    ContactAllPageModule,
  ],
  declarations: [ContactContactPage]
})
export class ContactContactPageModule {}
