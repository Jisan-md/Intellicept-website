import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleServiceComponent } from './oracle-service.component';

describe('OracleServiceComponent', () => {
  let component: OracleServiceComponent;
  let fixture: ComponentFixture<OracleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OracleServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OracleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
