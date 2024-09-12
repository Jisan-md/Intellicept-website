import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isSidenavOpen: boolean = false;
  isMobileView: boolean = false;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small]).subscribe(result => {
      this.isMobileView = result.matches;
      this.isSidenavOpen = !this.isMobileView; // Close sidenav on mobile
    });

    // Auto-close sidenav on login route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/admin-login')) {
          this.isSidenavOpen = false;
        }
      }
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle(); // Toggle sidenav using Angular Material method
    }
  }

  closeSidenav() {
    if (this.sidenav && this.isMobileView) {
      this.sidenav.close(); // Only close on mobile view
    }
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
