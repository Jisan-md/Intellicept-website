import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { CareerComponent } from './pages/career/career.component';
import { StaffingServicesComponent } from './pages/staffing-services/staffing-services.component';
import { DigitalMarketingServicesComponent } from './pages/digital-marketing-services/digital-marketing-services.component';
import { RPOServicesComponent } from './pages/rpo-services/rpo-services.component';
import { ServicesComponent } from './pages/services/services.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CustomerExperienceExcellenceComponent } from './pages/customer-experience-excellence/customer-experience-excellence.component';
import { BusinessProcessExecutionComponent } from './pages/business-process-execution/business-process-execution.component';
import { DataAnalyticsComponent } from './pages/data-analytics/data-analytics.component';
import { DigitalTransformationComponent } from './pages/digital-transformation/digital-transformation.component';
import { CloudMigrationServicesComponent } from './pages/cloud-migration-services/cloud-migration-services.component';
import { InnovationEngineComponent } from './pages/innovation-engine/innovation-engine.component';
import { OracleServiceComponent } from './pages/oracle-service/oracle-service.component';
import { StaffingMythsUnveiledComponent } from './pages/staffing-myths-unveiled/staffing-myths-unveiled.component';
import { AdminContactUsComponent } from './admin/admin-contact-us/admin-contact-us.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminCareerComponent } from './admin/admin-career/admin-career.component';
import { AdminDigitalBusinessServicesComponent } from './admin/admin-digital-business-services/admin-digital-business-services.component';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { SideNavComponent } from './admin/side-nav/side-nav.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IMDGComponent } from './pages/imdg/imdg.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    PartnerComponent,
    IndustriesComponent,
    CareerComponent,
    StaffingServicesComponent,
    DigitalMarketingServicesComponent,
    RPOServicesComponent,
    ServicesComponent,
    CustomerExperienceExcellenceComponent,
    BusinessProcessExecutionComponent,
    DataAnalyticsComponent,
    DigitalTransformationComponent,
    CloudMigrationServicesComponent,
    InnovationEngineComponent,
    OracleServiceComponent,
    InnovationEngineComponent,
    StaffingMythsUnveiledComponent,
    AdminContactUsComponent,
    AdminLoginComponent,
    AdminCareerComponent,
    AdminDigitalBusinessServicesComponent,
    AdminServicesComponent,
    SideNavComponent,
    AddJobsComponent,
    NotFoundComponent,
    IMDGComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,AccordionModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,NgbDropdownModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }