import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: any[] = []

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

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

  delete(category: Category ){
    let index = this.categories.indexOf(category) ;
    this.categories.splice(index, 1) ;
    this.categoryService.deleteCategory(category.id).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
