import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '' ,redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'movie/create',component:CreateComponent},
  {path:'movie/:type/:id',component:MovieComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
