import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-digital-marketing-services',
  templateUrl: './digital-marketing-services.component.html',
  styleUrls: ['./digital-marketing-services.component.scss']
})
export class DigitalMarketingServicesComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      userMessage: ['']
    });
  }

  onSubmit() {
    console.log('Form Values on Submit:', this.contactForm.value);

    this.contactForm.markAllAsTouched();
    this.contactForm.updateValueAndValidity();
    
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control) {
        console.log(`${key} - Valid: ${control.valid}, Errors: ${JSON.stringify(control.errors)}`);
      }
    });

    if (this.contactForm.valid) {
      this.commonService.digitalMarketingForm(this.contactForm.value).subscribe((res: any) => {
        console.log('Form submitted successfully:', res);
      }, (err: any) => {
        // console.error('Form submission failed:', err);
        this.commonService.showToast('success', "Form submission successful");
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();

      });
    } else {
      this.commonService.showToast('error', "Form submission failed");
    }
  }



  cards = [
    {
      title: 'SEO Services',
      descriptionShort: `Intellicept's SEO service is designed to help businesses improve their search engine rankings and increase their online visibility. Our team of experts uses a data-driven approach to identify`,
      descriptionFull: ` the most effective strategies for your business, including keyword research, on-page optimization, and link building. We conduct thorough website audits to identify areas for improvement, and we create customized SEO strategies that are tailored to your business goals and target audience. Our ongoing SEO efforts include monitoring and analyzing website traffic and search engine rankings, making necessary adjustments to optimize performance.`,
      imageSrc: 'assets/seo.png',
      imageWidth: 100,
      expanded: false
    },
    {
      title: 'Social Media Marketing',
      descriptionShort: `Our social media marketing service is designed to help businesses connect with their audience, build brand awareness, and drive traffic to their website through various social media platforms`,
      descriptionFull: `Our team of experts is highly skilled in creating and implementing effective social media campaigns that deliver results. We conduct thorough research to identify your target audience, create compelling content that resonates with them, and use a data-driven approach to optimize your social media presence. Our ongoing efforts include monitoring social media analytics, tracking engagement, and making necessary adjustments to maximize results.`,
      imageSrc: 'assets/1803001.png',
      imageWidth: 105,
      expanded: false
    },
    {
      title: 'Google Ads',
      descriptionShort: `Google Ads service helps businesses achieve their advertising goals by running targeted pay-per-click (PPC) campaigns on the Google search and display networks Our`,
      descriptionFull: ` team of experts uses a data-driven approach to identify the most effective keywords and ad formats for your business, creating optimized campaigns that deliver results. We continuously monitor campaign performance, analyzing metrics such as click-through rates, conversion rates, and cost-per-click to identify areas for improvement and make necessary adjustments. Our PPC management services also include landing page optimization and A/B testing to improve your conversion rates and maximize your ROI.`,
      imageSrc: 'assets/googleAds.png',
      imageWidth: 100,
      expanded: false
    },
    {
      title: 'Email Marketing Campaign',
      descriptionShort: `Our email marketing campaign service helps businesses build and maintain relationships with their customers through targeted email campaigns`,
      descriptionFull: `Our team of experts uses a data-driven approach to create customized email campaigns that deliver measurable results. We conduct thorough research to identify your target audience and create compelling email content that resonates with them. We also use advanced email automation tools to deliver emails at the right time, to the right people, and track performance. Our ongoing efforts include monitoring email analytics, optimizing campaigns, and continuously improving results.`,
      imageSrc: '/assets/email.png',
      imageWidth: 100,
      expanded: false
    },
    {
      title: 'Graphic Designing',
      descriptionShort: `At Intellicept, we offer exceptional graphic design services to help businesses strengthen their visual identity Our experienced designers work closely with`,
      descriptionFull: ` clients to create customized designs that align with their brand messaging and business objectives. Our services cover a wide range of design needs, including logo design, marketing materials, packaging, and more. With our creative expertise, we can help businesses stand out and connect with their target audience through compelling and engaging visuals.`,
      imageSrc: '/assets/graphics.png',
      imageWidth: 100,
      expanded: false
    },
    {
      title: 'Photography',
      descriptionShort: `Intellicept provides professional photography services to help businesses capture high-quality visuals that showcase their products, services, and brand.`,
      descriptionFull: `Our team of skilled photographers specializes in various photography styles, including product photography, lifestyle photography, event photography, and more. We use top-of-the-line equipment and lighting techniques to produce stunning images that tell your brand story and engage your audience. With our photography services, businesses can enhance their marketing efforts and create a lasting impression on their customers.`,
      imageSrc: '/assets/photos.png',
      imageWidth: 100,
      expanded: false
    }
  ];

  toggleReadMore(card: any) {
    this.cards.forEach(c => {
      if (c !== card) {
        c.expanded = false;
      }
    });
    card.expanded = !card.expanded;
  }
}