import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrl: './admin-services.component.scss'
})
export class AdminServicesComponent {


  getData: any = [];
  constructor(private commonService: CommonService ) { }
   ngOnInit(): void {
      this.commonService.getServices().subscribe((data: any) => {
        console.log(data);
        this.getData = data;
      });
    }
  }
  