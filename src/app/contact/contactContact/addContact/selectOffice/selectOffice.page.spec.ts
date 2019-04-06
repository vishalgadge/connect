import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOfficePage } from './selectOffice.page';

describe('SelectOfficePage', () => {
  let component: SelectOfficePage;
  let fixture: ComponentFixture<SelectOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOfficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
