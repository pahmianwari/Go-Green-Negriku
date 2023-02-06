import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { BerandaComponent } from './beranda/beranda.component';
import { RouterModule, Routes } from '@angular/router';
import { InformasiComponent } from './informasi/informasi.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes : Routes = [
  {
    path:'',
    component: PublicComponent,
    children:[
      {
        path: 'beranda',
        component: BerandaComponent
      },
      {
        path: 'informasi',
        component: InformasiComponent
      }
    ]
  }
]

@NgModule({
  declarations: [PublicComponent, BerandaComponent, InformasiComponent, EdukasiComponent, AgendaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
