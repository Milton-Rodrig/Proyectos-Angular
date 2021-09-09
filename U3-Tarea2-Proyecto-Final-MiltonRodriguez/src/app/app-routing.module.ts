import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [	
	{ path:'list-empleado', component: ListEmpleadoComponent},
	{ path:'create-empleado', component: CreateEmpleadoComponent},
	{ path:'editEmpleado/:id', component: CreateEmpleadoComponent},
	{path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
	{ path: '', redirectTo:'/list-empleado', pathMatch: 'full' },
	{ path: '**', redirectTo:'/list-empleado', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
