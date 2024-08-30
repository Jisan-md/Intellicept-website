import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  
testimonialOptions: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
  partnerSlides: OwlOptions = {
    nav: false,
    loop: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        '<i class="flaticon-chevron-1"></i>',
        '<i class="flaticon-chevron"></i>'
    ],
    responsive: {
        0: {
            items: 2
        },
        485: {
            items: 3
        },
        695: {
            items: 3
        },
        935: {
            items: 4 
        },
        1295: {
            items: 5
        }
    }
}
}
