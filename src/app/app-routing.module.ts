<<<<<<< Updated upstream
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { HomeModule } from './modules/home/home.module';
// HomeModule
const routes: Routes = [{
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< Updated upstream
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> Stashed changes
