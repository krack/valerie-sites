import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
];

if(environment.siteNumber == 1){
	routes.push({
		path: 'path1', 
		 component: MenuComponent
	})
}else if(environment.siteNumber == 2){
	routes.push({
		path: 'path2', 
		 component: MenuComponent 
	})
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
