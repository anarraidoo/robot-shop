import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Robot shop "},
  {path: 'catalog', component: CatalogComponent, title: "Catalog - Robot shop "},
  {path: 'cart', component: CartComponent, title: "Cart - Robot shop "},
  {path: 'sign-in', component: SignInComponent, title: "Sign In"},
  {path: '', redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
