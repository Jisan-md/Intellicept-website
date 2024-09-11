import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {
  isModalOpen = false;  // For adding a new job
  isEditModalOpen = false;  // For editing a job
  addJobForm: FormGroup;  // Form for adding a new job
  editJobForm: FormGroup;  // Form for editing an existing job
  errorMessage: string | null = null;
  jobData: any = {};  // Job data fetched from backend
  selectedJob: any = null;  // Job selected for editing

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

  // Open the modal for adding a new job
  openModal() {
    this.isModalOpen = true;
  }

  // Close the modal for adding a new job
  closeModal() {
    this.isModalOpen = false;
  }

  // Open the modal for editing a job
  openEditModal(job: any) {
    this.selectedJob = job;
    this.isEditModalOpen = true;

    // Populate the edit form with the selected job's details
    this.editJobForm.patchValue({
      job_title: job.job_title,
      job_description: job.job_description,
      start_application_date: job.start_application_date,
      job_location: job.job_location,
      no_of_position: job.no_of_position
    });
  }

  // Close the modal for editing a job
  closeEditModal() {
    this.isEditModalOpen = false;
  }

  // Submit the form to add a new job
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

  // Submit the form to edit the selected job
  onEditSubmit() {
    if (this.editJobForm.valid && this.selectedJob) {
      const updatedJob = { ...this.selectedJob, ...this.editJobForm.value };

      this.commonService.updateJob(updatedJob).subscribe(
        (res: any) => {
          console.log('Job updated successfully:', res);
          this.commonService.showToast('success', 'Job updated successfully');
          this.closeEditModal();
          this.fetchJob();  // Refresh the job list after update
        },
        (error) => {
          this.commonService.showToast('error', 'Failed to update job');
        }
      );
    }
  }

  // Fetch the list of jobs from backend
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

  // Delete a job by its ID
  deleteJob(jobId: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.commonService.deleteJob(jobId).subscribe(
        (res: any) => {
          console.log('Job deleted successfully:', res);
          this.commonService.showToast('success', 'Job deleted successfully');
          this.fetchJob();  // Refresh the job list after deletion
        },
        (error) => {
          console.error('Error deleting job:', error);
          this.commonService.showToast('error', 'Failed to delete job');
        }
      );
    }
  }
}
