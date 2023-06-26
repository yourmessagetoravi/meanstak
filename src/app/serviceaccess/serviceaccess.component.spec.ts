import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceaccessComponent } from './serviceaccess.component';

describe('ServiceaccessComponent', () => {
  let component: ServiceaccessComponent;
  let fixture: ComponentFixture<ServiceaccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceaccessComponent]
    });
    fixture = TestBed.createComponent(ServiceaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
