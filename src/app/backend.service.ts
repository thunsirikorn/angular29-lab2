import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts(): Product[] {
    return [];
  }

  getProductById (productID: number): Product {
    return;
  }


}
