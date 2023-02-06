import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarComponent } from './user/daftar/daftar.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'daftar',
    component: DaftarComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
