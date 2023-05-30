import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id:any){
    this.productService.removeProduct(id).subscribe(()=> console.log('xoa thanh cong'))
  }
}
