import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUserUrl = "http://localhost:8080/users/register"
  private loginUserUrl = "http://localhost:8080/users/login"

  constructor(private http: HttpClient) { }

  public registerUser(user: User) {
    let dataFromAPI = this.http.post<any>(this.registerUserUrl, user)
    return dataFromAPI
  }

  public loginUser(user: User) {
    let dataFromAPI = this.http.post<any>(this.loginUserUrl, user)
    return dataFromAPI
  }
  isLoggedIn() {

    let token = localStorage.getItem("myToken");

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isLoggedInAdmin() {

    let token = localStorage.getItem("myToken");

    if (token) {
      //1- Décodage mtaa token
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      //2- verification lel role, if ? admin true sinon : false
      return decodedToken.role == "admin" ? true : false

    } else {
      return false;
    }
  }
  isLoggedInClient() {

    let token = localStorage.getItem("myToken");

    if (token) {
      //1- Décodage mtaa token
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      //2- verification lel role, if ? admin true sinon : false
      return decodedToken.role == "client" ? true : false

    } else {
      return false;
    }
  }
}
