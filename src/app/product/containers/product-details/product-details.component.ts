import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.route.snapshot.paramMap.get('id');
  }

}
