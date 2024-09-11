import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    // Initialize form for adding a new job
    this.addJobForm = this.fb.group({
      job_title: ['', [Validators.required, Validators.minLength(2)]],
      job_description: ['', [Validators.required, Validators.minLength(10)]],
      start_application_date: ['', Validators.required],
      job_location: ['', Validators.required],
      no_of_position: ['', [Validators.required, Validators.min(1)]],
    });

    // Initialize form for editing an existing job
    this.editJobForm = this.fb.group({
      job_title: ['', [Validators.required, Validators.minLength(2)]],
      job_description: ['', [Validators.required, Validators.minLength(10)]],
      start_application_date: ['', Validators.required],
      job_location: ['', Validators.required],
      no_of_position: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.fetchJob();
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

  this.editJobForm.patchValue({
    job_title: job.job_title,
    job_description: job.job_description,
    start_application_date: formattedDate, 
    job_location: job.job_location,
    no_of_position: job.no_of_position
  });
}


  closeEditModal() {
    this.isEditModalOpen = false;
  }

  onSubmit() {
    if (this.addJobForm.valid) {
      this.commonService.addNewJob(this.addJobForm.value).subscribe(
        (res: any) => {
          console.log('Job added successfully:', res);
          this.commonService.showToast('success', 'Job added successfully');
          this.closeModal();
          this.fetchJob();
        },
        (error) => {
          this.commonService.showToast('error', 'Job add failed');
        }
      );
    }
  }

  onEditSubmit() {
    if (this.editJobForm.valid && this.selectedJob) {
      const updatedJob = { ...this.selectedJob, ...this.editJobForm.value };

      this.commonService.updateJob(updatedJob).subscribe(
        (res: any) => {
          console.log('Job updated successfully:', res);
          this.commonService.showToast('success', 'Job updated successfully');
          this.closeEditModal();
          this.fetchJob(); 
        },
        (error) => {
          this.commonService.showToast('error', 'Failed to update job');
        }
      );
    }
  }

  fetchJob() {
    this.commonService.fetchJob().subscribe(
      (res: any) => {
        this.jobData = res;
        console.log('Job data:', this.jobData);
      },
      (error) => {
        console.error('Error fetching job data:', error);
      }
    );
  }

  deleteJob(jobId: number) {
    if (confirm('Are you sure you want to delete this job?')) {
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
}
