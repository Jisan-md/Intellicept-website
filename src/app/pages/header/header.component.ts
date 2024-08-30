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
}

