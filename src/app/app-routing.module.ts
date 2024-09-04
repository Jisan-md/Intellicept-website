import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CustomerExperienceExcellenceComponent } from './pages/customer-experience-excellence/customer-experience-excellence.component';
import { BusinessProcessExecutionComponent } from './pages/business-process-execution/business-process-execution.component';
import { DataAnalyticsComponent } from './pages/data-analytics/data-analytics.component';
import { DigitalTransformationComponent } from './pages/digital-transformation/digital-transformation.component';
import { CloudMigrationServicesComponent } from './pages/cloud-migration-services/cloud-migration-services.component';
import { InnovationEngineComponent } from './pages/innovation-engine/innovation-engine.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'partner',
    component: PartnerComponent
  },
  {
    path: 'industries',
    component: IndustriesComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'staffing-services',
    component: StaffingServicesComponent  
  },
  {
    path: 'digital-marketing-services',
    component: DigitalMarketingServicesComponent
  },
  {
    path: 'rpo-services',
    component: RPOServicesComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'customer-experience-excellence',
    component: CustomerExperienceExcellenceComponent
  },
  {
    path: 'business-process-execution',
    component: BusinessProcessExecutionComponent
  },
  {
    path: 'data-analytics',
    component: DataAnalyticsComponent
  },
  {
    path: 'digital-transformation',
    component: DigitalTransformationComponent
  },
  {
    path: 'cloud-migration-services',
    component: CloudMigrationServicesComponent
  },
  { 
    path: 'innovation-engine',
    component: InnovationEngineComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
