import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl: any  = "https://5e69-203-92-37-218.ngrok-free.app/";

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  showToast(action: 'success' | 'error' | 'info' | 'warning', message: string) {
    this.toastr[action](message, action + "!", { timeOut: 3000, progressBar: true, progressAnimation: 'decreasing', positionClass: 'toast-top-right' });
}
  serviceForm(data: any) {
    return this.http.post(this.apiUrl + `service`, data);
  }
  digitalMarketingForm(data: any) {
    return this.http.post(this.apiUrl + `digitalMarketing`, data);
  }
  contactUsForm(data: any) {
  return this.http.post(this.apiUrl + `contactUs`, data);
}
careerForm(data: any) {
  return this.http.post(this.apiUrl + `User`, data);  
}

}
