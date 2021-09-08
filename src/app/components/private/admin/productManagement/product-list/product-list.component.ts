import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: any[] = []

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.allProduct().subscribe(
      res => {
        console.log(res);
        this.products = res
      },
      err => {
        console.log(err);
      }
    )
  }

  delete(product: Product ){
    let index = this.products.indexOf(product) ;
    this.products.splice(index, 1) ;
    this.productService.deleteProduct(product.Id).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
