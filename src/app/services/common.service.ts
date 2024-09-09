import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = "https://78d9-203-92-37-218.ngrok-free.app/";
  private isAuthenticatedKey = 'isAuthenticated'; 

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  isLoggedIn(): boolean {
    const sessionStatus = localStorage.getItem(this.isAuthenticatedKey);
    return sessionStatus === 'true'; 
  }

  setLoginStatus(status: boolean) {
    localStorage.setItem(this.isAuthenticatedKey, String(status));
  }

  showToast(action: 'success' | 'error' | 'info' | 'warning', message: string) {
    this.toastr[action](message, action + "!", { timeOut: 3000, progressBar: true, progressAnimation: 'decreasing', positionClass: 'toast-top-right' });
  }

  serviceForm(data: any) {
    return this.http.post(`${this.apiUrl}service`, data);
  }

  digitalMarketingForm(data: any) {
    return this.http.post(`${this.apiUrl}digitalMarketing`, data);
  }

  contactUsForm(data: any) {
    return this.http.post(`${this.apiUrl}contactUs`, data);
  }

  careerForm(data: any) {
    return this.http.post(`${this.apiUrl}User`, data);  
  }

  adminLogin(data: any) {
    return this.http.post(`${this.apiUrl}login`, data);
  }
}
