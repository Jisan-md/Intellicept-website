import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-rpo-services',
  templateUrl: './rpo-services.component.html',
  styleUrls: ['./rpo-services.component.scss'] 
})
export class RPOServicesComponent {
  oneAtATime = true;
  isFirstOpen = true;
  isLoading: boolean = true;
  constructor( private meta: Meta){}

  ngOnInit(): void {
    this.simulateLoading();
  }

  simulateLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 300); 
  }
}
