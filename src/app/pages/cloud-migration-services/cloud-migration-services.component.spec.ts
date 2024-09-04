import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMigrationServicesComponent } from './cloud-migration-services.component';

describe('CloudMigrationServicesComponent', () => {
  let component: CloudMigrationServicesComponent;
  let fixture: ComponentFixture<CloudMigrationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudMigrationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudMigrationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
