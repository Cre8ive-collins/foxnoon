import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothCatComponent } from './cloth-cat.component';

describe('ClothCatComponent', () => {
  let component: ClothCatComponent;
  let fixture: ComponentFixture<ClothCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
