import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl: any  = "https://api.neuvays.com/";

  constructor() { }
  contactUs(data: any) {
    // return this.http.post(this.apiUrl + `contactUs`, data);
  }
}
