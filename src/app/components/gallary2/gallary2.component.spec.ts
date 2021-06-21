import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallary2Component } from './gallary2.component';

describe('Gallary2Component', () => {
  let component: Gallary2Component;
  let fixture: ComponentFixture<Gallary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallary2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
