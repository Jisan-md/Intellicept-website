import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  applyForm!: FormGroup;
  errorMessage: string = '';
  formErrorMessage: string = '';
  file: File | null = null;
  isModalOpen = false; 
  isSaveModalOpen = false; 
  jobData: any = {};  
  selectedJob: any = null; 

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.fetchJob();
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      desc: ['', [Validators.required]],
      file: [null, [Validators.required, this.fileValidator]]
    });
  }

  isEndDateExpired(endDate: string): boolean {
    const currentDate = new Date();
    const endApplicationDate = new Date(endDate);
    return endApplicationDate < currentDate; 
  }

  handleApplyClick(job: any) {
    console.log("press")
    if (this.isEndDateExpired(job.end_application_date)) {
      this.commonService.showToast('error', "The application period for this job has ended.");
    } else {
      this.openSaveModal();
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (this.validateFile(file)) {
        this.file = file;
        this.applyForm.get('file')?.setValue(file);
        this.errorMessage = ''; 
      } else {
        this.errorMessage = 'Invalid file type or size. Please upload a .doc, .docx, or .pdf file with a maximum size of 5MB.';
        this.file = null;
        this.applyForm.get('file')?.setValue(null);
      }
    }
  }

  validateFile(file: File): boolean {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!allowedTypes.includes(file.type)) {
      return false; 
    }
    if (file.size > maxSize) {
      return false; 
    }
    return true; 
  }

  fileValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const file = control.value;
    if (!file) {
      return { required: true }; 
    }
    return null;
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
        this.file = null
        this.applyForm.markAsPristine();
        this.applyForm.markAsUntouched();
        this.closeSaveModal();
      }, (error) => {
        this.formErrorMessage = "Form submission failed. Please try again."; 
      });
    } else {
      this.formErrorMessage = "Please fill in all required fields and upload a valid file.";
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
