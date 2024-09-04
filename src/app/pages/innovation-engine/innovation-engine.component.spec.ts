import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationEngineComponent } from './innovation-engine.component';

describe('InnovationEngineComponent', () => {
  let component: InnovationEngineComponent;
  let fixture: ComponentFixture<InnovationEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnovationEngineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnovationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
