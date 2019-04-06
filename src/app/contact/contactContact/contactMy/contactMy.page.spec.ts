import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMy } from './contactMy.page';

describe('ContactMy', () => {
  let component: ContactMy;
  let fixture: ComponentFixture<ContactMy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMy ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
