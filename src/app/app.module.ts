import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    InnovationEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,AccordionModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
