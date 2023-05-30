import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.productService.getOneProduct(id).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => console.log(error.message)
      );
    });
  }
}
