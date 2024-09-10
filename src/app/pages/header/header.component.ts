import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSticky: boolean = false;
  isHomePage: boolean = false;

  // navLinks = [
  //   { path: '/', label: 'Home' },
  //   { path: '/aboutUs', label: 'About Us' },
  //   { path: '/rpo-services', label: 'RPO' },
  //   { path: '/services', label: 'Services' },
  //   { path: '/digital-marketing-services', label: 'Digital Marketing Services' },
  //   { path: '/staffing-services', label: 'Staffing Services' },
  //   { path: '/career', label: 'Career' },
  //   { path: '/industries', label: 'Industries' },
  //   { path: '/partner', label: 'Partners' },
  //   { path: '/blog', label: 'Blog' },
  //   { path: '/contact-us', label: 'Contact Us' },
  // ];

  // Router is now public so it can be accessed in the template
  constructor(public router: Router) {
    this.checkIfHomePage();

    // Listen to route changes to apply sticky behavior only on the Home page
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
      }
    });
  }

  // Check if the current route is Home (i.e., '/')
  checkIfHomePage() {
    this.isHomePage = this.router.url === '/';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Apply sticky behavior only on the Home page
    if (this.isHomePage) {
      if (window.pageYOffset > 50) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }

  closeNav() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show'); // Close the navbar after clicking a link
    }
  }

  getNavbarStyle() {
    if (this.isHomePage && !this.isSticky) {
      return { background: 'transparent' };
    } else {
      return { background: 'linear-gradient(75deg, #1351a8 5%, #162e66)' };
    }
  }

}
