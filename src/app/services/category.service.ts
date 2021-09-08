import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //shift+alt+fleche loutani

  private addCategoryUrl = "http://localhost:8080/categories/add"
  private allCategoryUrl = "http://localhost:8080/categories/all"

  private updateCategoryUrl = "http://localhost:8080/categories/update"
  private getCategorybyidUrl = "http://localhost:8080/categories/one/"
  private deleteCategoryUrl = "http://localhost:8080/categories/delete/";

  constructor(private http: HttpClient) { }

  public addCategory(category: Category) {
    let dataFromAPI = this.http.post<any>(this.addCategoryUrl, category)
    return dataFromAPI
  }

  public allCategory() {
    let dataFromAPI = this.http.get<any>(this.allCategoryUrl)
    return dataFromAPI
  }

  updateCategory(category: Category) {
    return this.http.patch<any>(this.updateCategoryUrl, category)
  }

  getOneCategory(id: any) {
    return this.http.get<any>(this.getCategorybyidUrl + id)
  }

  deleteCategory(id: any) {
    return this.http.delete<any>(this.deleteCategoryUrl+id)
  }

}
