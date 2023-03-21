import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareInBitsLoadingComponent } from './square-in-bits-loading.component';

describe('SquareInBitsLoadingComponent', () => {
  let component: SquareInBitsLoadingComponent;
  let fixture: ComponentFixture<SquareInBitsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareInBitsLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareInBitsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
