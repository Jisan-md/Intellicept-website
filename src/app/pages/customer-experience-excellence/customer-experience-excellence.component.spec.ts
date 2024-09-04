import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerExperienceExcellenceComponent } from './customer-experience-excellence.component';

describe('CustomerExperienceExcellenceComponent', () => {
  let component: CustomerExperienceExcellenceComponent;
  let fixture: ComponentFixture<CustomerExperienceExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerExperienceExcellenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerExperienceExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
