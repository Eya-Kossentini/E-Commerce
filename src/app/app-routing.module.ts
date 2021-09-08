import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryAddComponent } from './components/private/admin/categoryManagement/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/categoryManagement/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categoryManagement/category-update/category-update.component';
import { ClientManagementComponent } from './components/private/admin/clientManagement/client-management.component';
import { OrdersDetailsComponent } from './components/private/admin/OrdersManagement/ordersManagement-details/orders-details.component';
import { OrdersListComponent } from './components/private/admin/OrdersManagement/ordersManagement-list/orders-list.component';
import { ProductAddComponent } from './components/private/admin/productManagement/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/productManagement/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/productManagement/product-update/product-update.component';
import { MyOrdersDetailsComponent } from './components/private/client/my-orders-details/my-orders-details.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';

import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';

import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ClientGuard } from './guards/client.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'product-update/:id',
    component: ProductUpdateComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'clientManagement',
    component: ClientManagementComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'category-add',
    component: CategoryAddComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
    canActivate:  [AdminGuard]
  },
  {
    path: 'category-update/:id',
    component: CategoryUpdateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'my-orders-details',
    component: MyOrdersDetailsComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'ordersManagement-details',
    component: OrdersDetailsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'ordersManagement-list',
    component: OrdersListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "**",
    component: Page404Component
  } //route mooch mawjouda thezo auttre page404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
