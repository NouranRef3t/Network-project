import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false; // Variable to track menu state

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const header = document.querySelector('.start-style');
      if (header) {
        if (scroll >= 10) {
          header.classList.remove('start-style');
          header.classList.add('scroll-on');
        } else {
          header.classList.remove('scroll-on');
          header.classList.add('start-style');
        }
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
    console.log('Menu toggled. Is menu open?', this.isMenuOpen);
  }
  
}
