import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendService } from './backend.service'
import { NavbarComponent } from './home/navbar/navbar.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { from } from 'rxjs';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductListComponent
  },
  {
    path: 'todoList',
    component: TodoListComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    TodoListComponent,
    TodoItemComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})

export class AppModule { }
