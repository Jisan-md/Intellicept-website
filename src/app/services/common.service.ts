import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = "https://3a5b-203-92-37-218.ngrok-free.app/";
  private isAuthenticatedKey = 'isAuthenticated'; 

  header: any = {
    "ngrok-skip-browser-warning": "true",
  }

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

  // Get data methods
  getContact() {
    return this.http.get(`${this.apiUrl}get-contactUs`, { headers: this.header });
  }

  getDigitalServices() {
    return this.http.get(`${this.apiUrl}get-digitalMarketing`, { headers: this.header });
  }

  getServices() {
    return this.http.get(`${this.apiUrl}get-serviceData`, { headers: this.header });
  }

  getCareerData() {
    return this.http.get(`${this.apiUrl}user-data`, { headers: this.header });
  }

  fetchJob() {
    return this.http.get(`${this.apiUrl}get-jobs`, { headers: this.header });
  }

  addNewJob(data: any) {
    return this.http.post(`${this.apiUrl}addJob`, data);
  }

  deleteJob(jobId: number) {
    return this.http.post(`${this.apiUrl}deleteJob/${jobId}`, { headers: this.header });
  }
  
  updateJob(job: any) {
    return this.http.post(`${this.apiUrl}updateJobs/${job.id}`, job, { headers: this.header });
  }
  

}
