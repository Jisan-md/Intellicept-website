import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingMythsUnveiledComponent } from './staffing-myths-unveiled.component';

describe('StaffingMythsUnveiledComponent', () => {
  let component: StaffingMythsUnveiledComponent;
  let fixture: ComponentFixture<StaffingMythsUnveiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffingMythsUnveiledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffingMythsUnveiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
