import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ CommonService } from '../../services/common.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {

  applyForm!: FormGroup;
  errorMessage: string = '';
  file: File | null = null;
  isModalOpen = false; 
  isSaveModalOpen = false; 
  jobData: any = {};  
  selectedJob: any = null; 


  constructor(private fb: FormBuilder, private commonService: CommonService) {
   
  }

  ngOnInit() {
    this.fetchJob();

    this.applyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      desc: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  openSaveModal() {
    this.isSaveModalOpen = true;
  
  }
  
  
  closeSaveModal() {
      this.isSaveModalOpen = false;
    }
  

  onSubmit() {
    if (this.applyForm.valid) {
      const formData = new FormData();
      formData.append('name', this.applyForm.get('name')?.value);
      formData.append('email', this.applyForm.get('email')?.value);
      formData.append('phone', this.applyForm.get('phone')?.value);
      formData.append('desc', this.applyForm.get('desc')?.value);
  
      if (this.file) {
        formData.append('file', this.file);
      }
        console.log('Form Data:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      this.commonService.careerForm(formData).subscribe((res: any) => {
        this.commonService.showToast('success', "Form submission successful");
        this.applyForm.reset();
        this.applyForm.markAsPristine();
        this.applyForm.markAsUntouched();
        this.closeSaveModal();

      });

    } else {
      this.commonService.showToast('error', "Form submission failed.");
    }
  }
  fetchJob() {
    this.commonService.fetchJob().subscribe(
      (res: any) => {
        this.jobData = res.filter((job: any) => job.isActive === true);
        console.log('Filtered Job data:', this.jobData);
      },
      (error) => {
        console.error('Error fetching job data:', error);
      }
    );
  }
  
}
