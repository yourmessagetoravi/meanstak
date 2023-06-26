import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContactComponent } from './contact/contact.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ServiceaccessComponent } from './serviceaccess/serviceaccess.component';
import { HttpproductlistComponent } from './httpproductlist/httpproductlist.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"pipes",component:PipesComponent},
  {path:"contact",component:ContactComponent},
  {path:"databinding",component:DatabindingComponent},
  {path:"service",component:ServiceaccessComponent},
  {path:"httpproducts",component:HttpproductlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
