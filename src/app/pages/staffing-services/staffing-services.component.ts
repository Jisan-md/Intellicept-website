import { Component } from '@angular/core';

@Component({
  selector: 'app-staffing-services',
  templateUrl: './staffing-services.component.html',
  styleUrl: './staffing-services.component.scss'
})
export class StaffingServicesComponent {
  isLoading: boolean = true;
  ngOnInit(): void {
    this.simulateLoading();
  }

  simulateLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 300); 
  }
}
