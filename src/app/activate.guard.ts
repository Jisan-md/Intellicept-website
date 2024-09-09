import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from './services/common.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private commonService: CommonService) {}

  canActivate(): boolean {
    if (this.commonService.isLoggedIn()) {
      return true; 
    } else {
      this.router.navigate(['/admin-login']); 
      return false;
    }
  }
}
