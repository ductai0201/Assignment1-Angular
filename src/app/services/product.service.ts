import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getOneProduct(id: any): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products/' + id);
  }
  addProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(
      'http://localhost:3000/products',
      product
    );
  }
  updateProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.patch<IProduct[]>(
      'http://localhost:3000/products' + product.id,
      product
    );
  }
  removeProduct(id: any): Observable<IProduct[]>{
    return this.http.delete<IProduct[]>('http://localhost:3000/products/'+id);
  }
}
