import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  ProductUpdateForm: FormGroup
  public categories: any[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
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
    this.ProductUpdateForm = this.fb.group(formControls)
  }

  get name() { return this.ProductUpdateForm.get('name') }
  get description() { return this.ProductUpdateForm.get('description') }
  get price() { return this.ProductUpdateForm.get('price') }
  get category() { return this.ProductUpdateForm.get('category') }
  get image() { return this.ProductUpdateForm.get('image') }


  ngOnInit(): void {
    let idProduct = this.route.snapshot.params.id;

    this.productService.getOneProduct(idProduct).subscribe(
      res => {
        let product = res;
        console.log(res);

        this.ProductUpdateForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          //image: product.ImageURL,
          category: product.category.id,
        })
      },
      err => {
        console.log(err);
      }
    )

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

  ProductUpdate() {

    let data = this.ProductUpdateForm.value;
    let idProduct = this.route.snapshot.params.id;

    let product = new Product(idProduct, data.name, data.description, data.image, data.price, new Category(data.category));


    this.productService.updateProduct(product).subscribe(
      res => {
        this.router.navigate(['/product-list'])
      },
      err => {
        console.log(err);
      }
    )
  }

}
