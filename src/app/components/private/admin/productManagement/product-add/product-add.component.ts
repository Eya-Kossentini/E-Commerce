import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public categories: any[] = [];

  ProductAddForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
    }

    this.ProductAddForm = this.fb.group(formControls)
  }

  get name() { return this.ProductAddForm.get('name') }
  get description() { return this.ProductAddForm.get('description') }
  get price() { return this.ProductAddForm.get('price') }
  get category() { return this.ProductAddForm.get('category') }
  get image() { return this.ProductAddForm.get('image') }

  ngOnInit(): void {

    this.categoryService.allCategory().subscribe(
      res => {
        console.log(res);
        this.categories = res
      },
      err => {
        console.log(err);
      }
    )
  }

  ProductAdd() {

    let data = this.ProductAddForm.value;

    let product = new Product(undefined, data.name, data.description, data.image, data.price, new Category(data.category));

    console.log(product);

    this.productService.addProduct(product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/product-list'])
      },
      err => {
        console.log(err);
      }
    )
  }
}
