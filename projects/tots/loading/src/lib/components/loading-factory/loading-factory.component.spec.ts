import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFactoryComponent } from './loading-factory.component';

describe('LoadingFactoryComponent', () => {
  let component: LoadingFactoryComponent;
  let fixture: ComponentFixture<LoadingFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
