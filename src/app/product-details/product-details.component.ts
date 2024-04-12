import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input()
  product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageURL(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    return product.discount > 0 ? ['strikethrough'] : [];
    // return { strikethrough: product.discount > 0};
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

}
