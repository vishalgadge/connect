import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contactDashboardPage } from './contactDashboard.page';

describe('contactDashboardPage', () => {
  let component: contactDashboardPage;
  let fixture: ComponentFixture<contactDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contactDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contactDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
