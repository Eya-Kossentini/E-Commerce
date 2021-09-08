import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent} from './app.component';

import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';

import { HomeComponent} from './components/public/home/home.component';
import { LoginComponent} from './components/public/login/login.component';
import { RegisterComponent} from './components/public/register/register.component';
import { Page404Component } from './components/public/page404/page404.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';

import { CategoryAddComponent } from './components/private/admin/categoryManagement/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/categoryManagement/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categoryManagement/category-update/category-update.component';
import { ProductAddComponent } from './components/private/admin/productManagement/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/productManagement/product-update/product-update.component';
import { ProductListComponent } from './components/private/admin/productManagement/product-list/product-list.component';

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersDetailsComponent } from './components/private/admin/OrdersManagement/ordersManagement-details/orders-details.component';
import { OrdersListComponent } from './components/private/admin/OrdersManagement/ordersManagement-list/orders-list.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './components/private/client/my-orders-details/my-orders-details.component';
import { ClientManagementComponent } from './components/private/admin/clientManagement/client-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductListComponent,
    OrdersDetailsComponent,
    OrdersListComponent,
    MyOrdersComponent,
    MyOrdersDetailsComponent,
    ClientManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule ,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
