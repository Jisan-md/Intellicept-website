import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPOServicesComponent } from './rpo-services.component';

describe('RPOServicesComponent', () => {
  let component: RPOServicesComponent;
  let fixture: ComponentFixture<RPOServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RPOServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RPOServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
