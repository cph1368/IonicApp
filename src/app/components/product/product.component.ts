import { Component, input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { Strings } from 'src/enums/strings.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {

  item = input<Product>();
  currency = Strings.currency;
  
  constructor() { }

  ngOnInit() {}

}
