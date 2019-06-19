import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { HomeComponent } from './home/home.component';
import { LibrosComponent} from './libros/libros.component'
import { ContactosComponent } from './contactos/contactos.component';
import { TareasComponent } from './tareas/tareas.component'; */

const routes: Routes = [
 // { path: 'home', component: HomeComponent },
 { path: 'home', loadChildren: './home/home.module#HomeModule' },
 // { path: 'tareas', component: TareasComponent },
 { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  //{ path: 'contactos', component: ContactosComponent },
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
  //{ path: 'libros', component: LibrosComponent },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
