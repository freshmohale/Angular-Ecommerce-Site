import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartChanged.subscribe((items: string | any[]) => {
      this.cartItemCount = items.length;
    });
  }

}
