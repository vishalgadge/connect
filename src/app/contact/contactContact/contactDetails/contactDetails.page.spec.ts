import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetails } from './contactDetails.page';

describe('ContactDetailsPage', () => {
  let component: ContactDetails;
  let fixture: ComponentFixture<ContactDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetails ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
