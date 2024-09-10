import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-career',
  templateUrl: './admin-career.component.html',
  styleUrl: './admin-career.component.scss',
})
export class AdminCareerComponent {
  users: any[] = [];  
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.fetchUserData();
  }
  fetchUserData(): void {
    this.commonService.getCareerData().subscribe(
      (data: any) => {  
        this.users = (data as { users: any[] }).users;  
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
