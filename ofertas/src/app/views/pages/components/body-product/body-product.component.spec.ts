/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodyProductComponent } from './body-product.component';

describe('BodyProductComponent', () => {
  let component: BodyProductComponent;
  let fixture: ComponentFixture<BodyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
