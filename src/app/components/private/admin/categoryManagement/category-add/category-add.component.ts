import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})

export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private categoryService: CategoryService
  ) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
    }

    this.categoryAddForm = this.fb.group(formControls)
  }

  get name() { return this.categoryAddForm.get('name') }

  ngOnInit(): void {
  }

  categoryAdd() {

    let data = this.categoryAddForm.value;

    //console.log(data)

    let category = new Category(undefined, data.name)

    //console.log(category);

    this.categoryService.addCategory(category).subscribe( //appel methode ali tajouti f bd 
      res => {
        console.log(res);
        this.router.navigate(['/category-list'])
      },
      err => {
        console.log(err);
      }
    )

  }

}
