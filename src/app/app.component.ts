import { Component, OnInit, ViewChild  } from '@angular/core';
import { from } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service'

@Component({
  selector: 'app-root, NavbarComponent, MainContentComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //constructor(private backendService: BackendService) {}

  title = 'angular29-lab2';
//  @ViewChild('productList',{static:true})
//  productList: ProductListComponent;

  ngOnInit(): void {
//    this.productList.products = this.backendService.getProducts();
    /*
    [
    {
    name: 'ส้มโอ',
    price: 111
    },
    {
    name: 'แตงโม',
    price: 222
    },
    {
    name: 'มะพร้าวนํ้าหอม',
    price: 333
    }
    ]; */
  }
}
