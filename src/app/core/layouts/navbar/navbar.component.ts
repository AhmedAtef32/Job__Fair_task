import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../featured/services/cart/cart.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, DrawerModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  visible2: boolean = false;

  private readonly _cartService = inject(CartService)
  private readonly _pLATFORM_ID = inject(PLATFORM_ID)

  ngOnInit(): void {
    if(isPlatformBrowser(this._pLATFORM_ID)) {
      this._cartService.getCartProducts()
    }
  }

}
