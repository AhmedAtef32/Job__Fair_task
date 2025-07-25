import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Job_Fair_Task';
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this._pLATFORM_ID)) {
      AOS.init();
    }
  }
}
