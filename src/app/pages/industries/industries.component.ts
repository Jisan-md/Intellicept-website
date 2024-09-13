import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
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
