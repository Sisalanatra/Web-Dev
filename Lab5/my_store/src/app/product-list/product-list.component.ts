import {Component, Input} from '@angular/core';
import {Observable, share} from 'rxjs';
import { products } from '../products';
import {Category} from "../categories";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  @Input() category!: Category
  share(url: string) {
    var sharelink = url;
    window.open(sharelink);
  }
  onNotify() {
    window.alert('You are notified!');
  }
}
