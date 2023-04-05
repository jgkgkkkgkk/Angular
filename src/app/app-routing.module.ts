import { NgModule } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { newPageComponent } from './newpage/newPagecomponent';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
   path: 'register', component: RegisterComponent 
  }, {
    path:'about',component: AboutComponent
  }, {
    path:'страница',component: newPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
