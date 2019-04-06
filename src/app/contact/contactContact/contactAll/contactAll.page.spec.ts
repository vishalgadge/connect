import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAll } from './contactAll.page';

describe('contactAll', () => {
  let component: ContactAll;
  let fixture: ComponentFixture<ContactAll>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAll ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
