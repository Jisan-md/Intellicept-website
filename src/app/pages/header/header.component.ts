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
  logoSrc: string = 'assets/intellicept.png'; 
  isNavOpen = false;
  isDropdownOpen: boolean = false;
 
  constructor(public router: Router) {
    this.checkIfHomePage();

   
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
      }
    });
  }
ngOnInit() {
  this.onWindowScroll()
}
  checkIfHomePage() {
    this.isHomePage = this.router.url === '/';
  }

  @HostListener('window:scroll', ['$event'])
 
  onWindowScroll() {
    if (this.isHomePage) {
      if (window.pageYOffset > 50) {
        this.isSticky = true;
        this.logoSrc = 'assets/intellicept.png'; 
      } else {
        this.isSticky = false;
        this.logoSrc = 'assets/Logo1.png'; 
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
      // return { background: 'linear-gradient(75deg, #1351a8 5%, #162e66)' };
      return { background: 'white)' };
    }
  }

   toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  activeDropdown: string | null = null; 

  toggleDropdown(dropdown: string) {
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = '';  
    } else {
      this.activeDropdown = dropdown; 
    }
  }
  
  onClick(dropdown: string) {
    if (window.innerWidth <= 768) {  
      this.activeDropdown = this.activeDropdown === dropdown ? '' : dropdown; 
    }
  }
  

  onMouseEnter(dropdown: string) {
    if (window.innerWidth > 768) {  
      this.activeDropdown = dropdown; 
    }
  }
  
  onMouseLeave() {
    if (window.innerWidth > 768) {  
      this.activeDropdown = '';  
    }
  }

}


  
  

