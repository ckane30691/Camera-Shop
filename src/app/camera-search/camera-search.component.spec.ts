import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSearchComponent } from './camera-search.component';

describe('CameraSearchComponent', () => {
  let component: CameraSearchComponent;
  let fixture: ComponentFixture<CameraSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
