import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-left-menu',
  imports: [MatIconModule, NgFor, NgIf, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
   currentPathname = '';
  menu_data = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
      type: 'icon',
    },
    {
      name: 'Income',
      icon: '/assets/images/income_icon.png',
      path: '/income',
      alt: 'Income',
      type: 'img',
    },
    {
      name: 'Expend',
      icon: '/assets/images/spending_icon.png',
      path: '/expend',
      alt: 'Expend',
      type: 'img',
    },
  ];
  constructor(private router: Router) {
   
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPathname = event.url;
      }
    });
  }
}
