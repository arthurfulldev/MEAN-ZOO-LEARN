import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaComponent } from '../components/tienda/tienda.component';
import { E404Component } from '../components/e404/e404.component';
import { AnimalsComponent } from '../components/animals/animals.component';
import { KeepersComponent } from '../components/keepers/keepers.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'store', component: TiendaComponent },
	{ path: 'animals', component: AnimalsComponent },
	{ path: 'keepers', component: KeepersComponent },
	{ path: 'contact', component: ContactComponent },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [
		RouterModule
	],
})
export class RoutingModule { }
