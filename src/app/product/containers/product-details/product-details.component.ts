import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(map(data => data['product'])).subscribe(res => this.product = res);
  }

}
