import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:IndexpageComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
