import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baeUrl = 'http://localhost:5006/api/products'
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baeUrl)
    .pipe(map(response => response._embedded.products))
  }
}

interface GetResponse{
 _embedded: {
  products: Product[];
 }
}
