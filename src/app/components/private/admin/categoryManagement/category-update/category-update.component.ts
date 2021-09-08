import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  categoryUpdateForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
    }

    this.categoryUpdateForm = this.fb.group(formControls)
  }

  get name() { return this.categoryUpdateForm.get('name') }

  ngOnInit(): void {
    let idCategory = this.route.snapshot.params.id;
    this.categoryService.getOneCategory(idCategory).subscribe(
      res => {
        this.categoryUpdateForm.patchValue({
          name: (res as any).name
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  categoryUpdate() {

    let data = this.categoryUpdateForm.value;
    let idCategory = this.route.snapshot.params.id;

    let category = new Category(idCategory, data.name);

    this.categoryService.updateCategory(category).subscribe(
      res => {
        this.router.navigate(['/category-list'])
      },
      err => {
        console.log(err);
      }
    )
  }


}
