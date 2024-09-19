import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {
  isModalOpen = false; 
  isEditModalOpen = false; 
  addJobForm: FormGroup;
  editJobForm: FormGroup; 
  errorMessage: string | null = null;
  jobData: any = {};  
  selectedJob: any = null;

  constructor(private fb: FormBuilder, private commonService: CommonService) { 
    // Initialize form for adding a new job with date comparison validator
    this.addJobForm = this.fb.group({
      job_title: ['', [Validators.required]],
      job_description: ['', Validators.required],
      start_application_date: ['', Validators.required],
      end_application_date: ['', Validators.required], 
      job_location: ['', Validators.required],
      no_of_position: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    }, { validator: this.endDateAfterStartDateValidator('start_application_date', 'end_application_date') });

    // Initialize form for editing an existing job with date comparison validator
    this.editJobForm = this.fb.group({
      id: [null], 
      job_title: ['', [Validators.required, Validators.minLength(2)]],
      job_description: ['', [Validators.required]],
      start_application_date: ['', Validators.required],
      end_application_date: ['', Validators.required],
      job_location: ['', Validators.required],
      no_of_position: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    }, { validator: this.endDateAfterStartDateValidator('start_application_date', 'end_application_date') });
  }

  ngOnInit() {
    this.fetchJob();
  }

  // Custom validator to ensure end date is after start date
  endDateAfterStartDateValidator(startDateControlName: string, endDateControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const startDateControl = formGroup.get(startDateControlName);
      const endDateControl = formGroup.get(endDateControlName);

      if (!startDateControl || !endDateControl) {
        return null; // If either control doesn't exist, skip validation
      }

      const startDate = new Date(startDateControl.value);
      const endDate = new Date(endDateControl.value);

      if (startDateControl.value && endDateControl.value && endDate <= startDate) {
        return { endDateBeforeStartDate: true }; // Error if end date is before or equal to start date
      }

      return null; // Validation passed
    };
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openEditModal(job: any) {
    this.selectedJob = job;
    this.isEditModalOpen = true;
  
    const formattedDate = new Date(job.start_application_date).toISOString().split('T')[0];
    const formattedEndDate = new Date(job.end_application_date).toISOString().split('T')[0];
  
    this.editJobForm.patchValue({
      id: job.id, 
      job_title: job.job_title,
      job_description: job.job_description,
      start_application_date: formattedDate, 
      end_application_date: formattedEndDate, 
      job_location: job.job_location,
      no_of_position: job.no_of_position
    });
  }

  closeEditModal() {
    this.isEditModalOpen = false;  
  }

  onEditSubmit() {
    if (this.editJobForm.invalid) {
      this.editJobForm.markAllAsTouched();
      return;
    }

    if (this.editJobForm.valid) {
      this.commonService.updateJob(this.editJobForm.value).subscribe(
        (res: any) => {
          console.log('Job updated successfully:', res);
          this.commonService.showToast('success', 'Job updated successfully');
          this.editJobForm.reset();
          this.closeEditModal();
          this.fetchJob();
        },
        (error) => {
          this.commonService.showToast('error', 'Job update failed');
        }
      );
    }
  }

  onSubmit() {
    if (this.addJobForm.invalid) {
      this.addJobForm.markAllAsTouched();
      return;
    }

    if (this.addJobForm.valid) {
      this.commonService.addNewJob(this.addJobForm.value).subscribe(
        (res: any) => {
          console.log('Job added successfully:', res);
          this.commonService.showToast('success', 'Job added successfully');
          this.addJobForm.reset();
          this.closeModal();
          this.fetchJob();
        },
        (error) => {
          this.commonService.showToast('error', 'Job add failed');
        }
      );
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

  deleteJob(jobId: number) {
    this.commonService.deleteJob(jobId).subscribe(
      (res: any) => {
        console.log('Job deleted successfully:', res);
        this.commonService.showToast('success', 'Job deleted successfully');
        this.fetchJob();  
      },
      (error) => {
        console.error('Error deleting job:', error);
        this.commonService.showToast('error', 'Failed to delete job');
      }
    );
  }
}
