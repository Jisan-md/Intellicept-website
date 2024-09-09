import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-digital-business-services',
  templateUrl: './admin-digital-business-services.component.html',
  styleUrl: './admin-digital-business-services.component.scss'
})
export class AdminDigitalBusinessServicesComponent {

  getData: any = [];
  constructor(private commonService: CommonService ) { }
   ngOnInit(): void {
      this.commonService.getDigitalServices().subscribe((data: any) => {
        console.log(data);
        this.getData = data;
      });
    }
  }
  
