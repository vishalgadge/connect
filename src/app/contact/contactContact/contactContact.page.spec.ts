import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContactPage } from './contactContact.page';

describe('ContactContactPage', () => {
  let component: ContactContactPage;
  let fixture: ComponentFixture<ContactContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactContactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
