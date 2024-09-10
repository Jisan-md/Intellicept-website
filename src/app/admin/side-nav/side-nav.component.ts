import { Component, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  isSidenavOpen: boolean = !this.breakpointObserver.isMatched(Breakpoints.Handset);
  sidebar: boolean = true;
  isOpen: boolean = false;
  isMobile: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isSidenavFixed = false;
  isMobileView: boolean = false;
  lastTap: number = 0;
  sidenavElement: any;
  mouseDownTime: number = 0;

  constructor(
    private router: Router,
    private commonService: CommonService,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {
    // Subscribe to router events to determine whether to show the sidebar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidebar = !event.url.startsWith('/admin-login');
      }
    });

    // Handle screen size changes
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobileView = result.matches;
      this.isSidenavOpen = !this.isMobileView; // Close sidenav on mobile view
    });
  }

  ngOnInit() {
    // Monitor handset and small device breakpoints
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small]).subscribe(result => {
      this.isMobileView = result.matches;
      this.isSidenavOpen = !this.isMobileView;
    });
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  toggleSidenav() {
    if (this.isMobileView) {
      this.isSidenavOpen = !this.isSidenavOpen;
    }
  }

  closeSidenav() {
    if (this.isMobileView) {
      this.isSidenavOpen = false;
    }
  }

  onTouchStart(event: TouchEvent) {
    const touchDuration = 2; // Duration threshold for touch
    let touchEndListener: EventListener | undefined;

    const touchEnd = (event: TouchEvent) => {
      this.toggleSidenav();
      if (touchEndListener) {
        this.renderer.listen(document, 'touchend', touchEndListener);
      }
    };

    touchEndListener = touchEnd as EventListener;

    const targetElement = document;
    this.renderer.listen(targetElement, 'touchend', touchEndListener);
    setTimeout(() => {
      if (touchEndListener) {
        this.renderer.removeChild(document, touchEndListener);
      }
    }, touchDuration);
  }
}
