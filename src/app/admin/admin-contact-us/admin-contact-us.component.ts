import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-contact-us',
  templateUrl: './admin-contact-us.component.html',
  styleUrl: './admin-contact-us.component.scss'
})
export class AdminContactUsComponent {
  getData: any = [];
constructor(private commonService: CommonService ) { }
 ngOnInit(): void {
    this.commonService.getContact().subscribe((data: any) => {
      console.log(data);
      this.getData = data;
    });
  }
}
