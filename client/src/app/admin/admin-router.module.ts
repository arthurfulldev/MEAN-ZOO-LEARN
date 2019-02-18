import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
	{ 
		path: 'admin', 
		component: MainComponent,
		children: [
			{ path: 'list', component: ListComponent },
			{ path: 'update', component: UpdateComponent },
			{ path: 'delete', component: DeleteComponent },
			{ path: 'create', component: CreateComponent },
		
			{ path: '', redirectTo: 'list', pathMatch: "full" },
		]
	}
]
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
})
export class AdminRouterModule { }
