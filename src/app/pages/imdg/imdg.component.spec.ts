import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDGComponent } from './imdg.component';

describe('IMDGComponent', () => {
  let component: IMDGComponent;
  let fixture: ComponentFixture<IMDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IMDGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IMDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
