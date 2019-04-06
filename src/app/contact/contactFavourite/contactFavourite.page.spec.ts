import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFavourite } from './contactFavourite.page';

describe('ContactFavourite', () => {
  let component: ContactFavourite;
  let fixture: ComponentFixture<ContactFavourite>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFavourite ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFavourite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
