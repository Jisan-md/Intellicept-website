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

  constructor(public router: Router) {
    this.checkIfHomePage();

   
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
      }
    });
  }

  checkIfHomePage() {
    this.isHomePage = this.router.url === '/';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
 
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
      navbar.classList.remove('show'); 
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
