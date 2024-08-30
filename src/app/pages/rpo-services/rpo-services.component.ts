import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-rpo-services',
  templateUrl: './rpo-services.component.html',
  styleUrls: ['./rpo-services.component.scss'] // also, it's styleUrls, not styleUrl
})
export class RPOServicesComponent {
  oneAtATime = true;
  isFirstOpen = true;
  constructor(private titleService: Title, private meta: Meta){}

  ngOnInit(): void {
    this.titleService.setTitle('Data Governance');
    this.meta.addTags([
      { name: 'keywords', content: 'sap master data governance, data governance process, enterprise data governance, mdm data governance, data governance solutions, data governance platform, sap master data management' },
      { name: 'description', content: 'sap master data governance' }
    ]);
  }
}
