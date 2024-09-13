import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent {
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
