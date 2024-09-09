import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDigitalBusinessServicesComponent } from './admin-digital-business-services.component';

describe('AdminDigitalBusinessServicesComponent', () => {
  let component: AdminDigitalBusinessServicesComponent;
  let fixture: ComponentFixture<AdminDigitalBusinessServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDigitalBusinessServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDigitalBusinessServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
