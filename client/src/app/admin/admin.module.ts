import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouterModule } from './admin-router.module';

import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
	imports: [
		CommonModule,
		AdminRouterModule
	],
	declarations: [
		MainComponent,
		CreateComponent,
		DeleteComponent,
		ListComponent,
		UpdateComponent,
	],
	exports: [
		MainComponent
	]
})
export class AdminModule { }
