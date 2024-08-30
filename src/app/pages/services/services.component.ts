import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]], 
      userMessage: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log('Form is invalid');}
  }
  getControl(controlName: string): FormControl {
    return this.contactForm.get(controlName) as FormControl;
  }

  promoBlocks = [
    {
      imgSrc: '/assets/oracles.png',
      altText: 'Oracle',
      title: 'Partnering with Industry Leaders',
      description: `At Intellicept, we understand the importance of leveraging the right technology to drive business success. 
      That's why we've established strong alliances with leading technology providers, allowing us to deliver innovative solutions 
      that meet the evolving needs of our clients.`,
      link: 'oracle-service.php',
      linkText: 'Read more',
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/enterprise.png',
      altText: 'Enterprise Information Management',
      title: 'Enterprise Information Management',
      description: `Data is the most important factor for making insight-based decisions at any organization and we aim to make this work for you. 
      Platform agnostic services will ensure that you have access to industry’s best standards for leveraging the data across your entire organization.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/big.png',
      altText: 'Big Data Analytics',
      title: 'Big Data Analytics',
      description: `We help you to build and execute your data strategy. Various aspects of data management are offered by us as we partner with some 
      of the leading names in the industry to offer the best in class data management solution.`,
      paddingBottom: '75px'
    },
    {
      imgSrc: '/assets/api.png',
      altText: 'API and Microservices Development',
      title: 'API and Microservices Development',
      description: `We offer Microservice architecture development in DevOps and Continuous Testing mode to our customers. 
      It helps them to focus on building single-function modules with well-defined interfaces and operations.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/auto.png',
      altText: 'Automation',
      title: 'Automation',
      description: `Process and technology automation are part of all technology landscapes, and we are at the forefront of this practice. 
      We can offer business process, test, and development automation practices by combining leading tools from the industry.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/clo.png',
      altText: 'Cloud Infrastructure',
      title: 'Cloud Infrastructure',
      description: `We help our customers to become more agile, nimble, and cost-efficient by helping them migrate their computing 
      infrastructure from on-premises to industry-leading hyperscalers.`,
      paddingBottom: '47px'
    },
    {
      imgSrc: '/assets/seo.png',
      altText: 'SEO Services',
      title: 'SEO Services',
      description: `At Intellicept, we offer SEO services crafted for each client’s specific needs. Our team of SEO experts use proven strategies 
      and tactics to improve search engine rankings, increase organic traffic, and drive more revenue for businesses. Our proven SEO strategies 
      will help you rank higher on Google and other search engines generating high-quality traffic to your website.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/socialMedia.png',
      altText: 'Social Media Marketing',
      title: 'Social Media Marketing',
      description: `Intellicept's social media marketing services are designed to help businesses increase brand awareness, engage with their target audience, 
      and drive more traffic to their website. No two strategies are alike, and our team of social media experts keeps the needs of clients in mind to create 
      and execute strategies across various platforms to achieve measurable results. Boost your business profitability with social media! 
      Reach potential customers through our targeted ads and engaging content. Let our expert social media team help you today.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/googleAds.png',
      altText: 'Google Ads',
      title: 'Google Ads',
      description: `At Intellicept, we understand the importance of Google Ads in driving online traffic and generating revenue for businesses. 
      To this end, we offer a comprehensive range of Google Ads services to help our clients achieve substantial digital footfall. 
      Our team of experts develops and executes campaigns that deliver measurable results and maximize ROI.`,
      paddingBottom: '47px'
    },
    {
      imgSrc: '/assets/download.png',
      altText: 'Email Marketing',
      title: 'Email Marketing',
      description: `Intellicept offers comprehensive email marketing services that help businesses reach and engage with their target audience. 
      Our team creates bespoke email campaigns with respect to the needs of our clients, using proven strategies and tactics to maximize open 
      and click-through rates, ultimately segueing into conversions.`,
      paddingBottom: '22px'
    },
    {
      imgSrc: '/assets/str.png',
      altText: 'Strategy Consulting',
      title: 'Strategy Consulting',
      description: `The most significant part of our offering is our experience in the industry, and we partner with our clients to keep current 
      by leveraging our experience and expertise.`,
      paddingBottom: '100px'
    }
  ];
}
