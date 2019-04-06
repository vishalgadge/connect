import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGroup } from './contactGroup.page';

describe('ContactGroup', () => {
  let component: ContactGroup;
  let fixture: ComponentFixture<ContactGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactGroup ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
