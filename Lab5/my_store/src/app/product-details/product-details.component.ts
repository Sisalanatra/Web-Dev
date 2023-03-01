import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import {count} from "rxjs";
import {categories} from "../categories";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryName = String(routeParams.get('categoryName'))
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    this.product = categories.find(category => category.name === categoryName)!.products.find(product => product.id === productIdFromRoute);
  }
  giveLike(product: Product){
    product.likes += 1
  }
}
