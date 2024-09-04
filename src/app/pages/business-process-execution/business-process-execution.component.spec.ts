import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProcessExecutionComponent } from './business-process-execution.component';

describe('BusinessProcessExecutionComponent', () => {
  let component: BusinessProcessExecutionComponent;
  let fixture: ComponentFixture<BusinessProcessExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessProcessExecutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessProcessExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
