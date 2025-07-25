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
  isLightMode: boolean = true
  ngOnInit(): void {
    if(isPlatformBrowser(this._pLATFORM_ID)) {
      this._cartService.getCartProducts()
      this.checkIfDrak()

    }
  }

  changeMode() {

    if(this.isLightMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
      this.isLightMode = false
    }else{
      this.isLightMode = true
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }

  checkIfDrak(){
       if (localStorage.getItem('theme') == 'dark') {
        this.isLightMode = false
        document.documentElement.classList.add('dark')
      }
  }


}
