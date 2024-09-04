import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  classApplied = false;
  constructor(public router: Router, public dialog: MatDialog) { }
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  // Navbar Sticky
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition >= 50) {
          this.isSticky = true;
      } else {
          this.isSticky = false;
      }
  }

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/rpo-services', label: 'RPO' },
    { path: '/services', label: 'Services' },
    { path: '/digital-marketing-services', label: 'Digital Marketing Services' },
    { path: '/staffing-services', label: 'Staffing Services' },
    { path: '/career', label: 'Career' },
    { path: '/industries', label: 'Industries' },
    { path: '/partner', label: 'Partners' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  

  closeNav() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show'); // Close the navbar
    }
  }

}

