import { Component, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSidenavOpen: boolean = !this.breakpointObserver.isMatched(Breakpoints.Handset);
  sidebar: boolean = true;
  isOpen: boolean = false;
  isMobile: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  // isSidenavOpen = true;
  isSidenavFixed = false;
  isMobileView: boolean = false;
  lastTap: number = 0;
  sidenavElement: any;
  mouseDownTime: number = 0;



  constructor(private router: Router, private commonService: CommonService, private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {
    // Subscribe to router events to determine whether to show the sidebar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidebar = !event.url.startsWith('/admin-login');
      }
    });
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobileView = result.matches;
      this.isSidenavOpen = !this.isMobileView; 
    });
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobileView = result.matches;
    });

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small
    ]).subscribe(result => {
      // Handle breakpoint changes
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
      this.isSidenavOpen = !this.isSidenavOpen;
    }
  }

  onTouchStart(event: TouchEvent) {
    const touchDuration = 2; 
    let touchEndListener: EventListener | undefined;

    const touchEnd = (event: TouchEvent) => {
      this.toggleSidenav();
      if (touchEndListener) {
        touchEndListener(event);
      }
    };


    touchEndListener = touchEnd as EventListener;

    const targetElement = document;
    this.renderer.listen(targetElement, 'touchend', touchEnd);
    setTimeout(() => {
      if (touchEndListener) {
        this.renderer.removeChild(document, touchEndListener);
      }
    }, touchDuration);
  }


}

