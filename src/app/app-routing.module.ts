import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { AccueilFestyComponent } from './accueil-festy/accueil-festy.component';
import { AccueilGourmandsComponent } from './accueil-gourmands/accueil-gourmands.component';
import { ConceptFestyComponent } from './concept-festy/concept-festy.component';
import { RepasOuvriersComponent } from './repas-ouvriers/repas-ouvriers.component';

import { AperitifComponent } from './aperitif/aperitif.component';
import { MenuFestyComponent } from './menu-festy/menu-festy.component';
import { RepasGroupesComponent } from './repas-groupes/repas-groupes.component';

/*menus import */
import { MenuLouiseComponent } from './menus/menu-louise/menu-louise.component';
import { MenuAgatheComponent } from './menus/menu-agathe/menu-agathe.component';
import { MenuBertilleComponent } from './menus/menu-bertille/menu-bertille.component';
import { MenuAliceComponent } from './menus/menu-alice/menu-alice.component';
import { DessertsComponent } from './menus/desserts/desserts.component';
/* buffet import */
import { BuffetsComponent } from './buffets/buffets.component';
import { BuffetJeanneComponent } from './buffets/buffet-jeanne/buffet-jeanne.component';
import { BuffetJustineComponent } from './buffets/buffet-justine/buffet-justine.component';
import { BuffetLinaComponent } from './buffets/buffet-lina/buffet-lina.component';
import { BuffetMarieComponent } from './buffets/buffet-marie/buffet-marie.component';
import { BuffetAutreComponent } from './buffets/buffet-autre/buffet-autre.component';

import { AutresServicesComponent } from './autres-services/autres-services.component';
import { BarEpicerieComponent } from './bar-epicerie/bar-epicerie.component';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
];

if(environment.siteNumber == 1){
	routes.push({
		path: 'accueil', 
		component: AccueilFestyComponent
	});
	routes.push({
		path: 'concept', 
		component: ConceptFestyComponent
	});
	routes.push({
		path: 'aperitif', 
		component: AperitifComponent
	});
	routes.push({
		path: 'menus', 
		component: MenuFestyComponent
	});
	routes.push({
		path: 'menus/louise', 
		component: MenuLouiseComponent
	});
	routes.push({
		path: 'menus/agathe', 
		component: MenuAgatheComponent
	});
	routes.push({
		path: 'menus/bertille', 
		component: MenuBertilleComponent
	});
	routes.push({
		path: 'menus/alice', 
		component: MenuAliceComponent
	});
	routes.push({
		path: 'menus/desserts', 
		component: DessertsComponent
	});

	routes.push({
		path: 'buffets', 
		component: BuffetsComponent
	});
	routes.push({
		path: 'buffets/jeanne', 
		component: BuffetJeanneComponent
	});
	routes.push({
		path: 'buffets/justine', 
		component: BuffetJustineComponent
	});
	routes.push({
		path: 'buffets/lina', 
		component: BuffetLinaComponent
	});
	routes.push({
		path: 'buffets/marie', 
		component: BuffetMarieComponent
	});
	routes.push({
		path: 'buffets/autre', 
		component: BuffetAutreComponent
	});
	routes.push({
		path: 'autre-services', 
		component: AutresServicesComponent
	});

	routes.push({
		path: 'contact', 
		component: ContactComponent
	});

	routes.push({ path: '',
		redirectTo: '/accueil',
		pathMatch: 'full'
	});

}else if(environment.siteNumber == 2){
	routes.push({
		path: 'accueil', 
		component: AccueilGourmandsComponent
	});
	routes.push({
		path: 'repas-ouvriers', 
		component: RepasOuvriersComponent
	});

	routes.push({
		path: 'repas-groupes', 
		component: RepasGroupesComponent
	});
	routes.push({
		path: 'aperitif', 
		component: AperitifComponent
	});

	routes.push({
		path: 'menus/louise', 
		component: MenuLouiseComponent
	});
	routes.push({
		path: 'menus/agathe', 
		component: MenuAgatheComponent
	});
	routes.push({
		path: 'menus/bertille', 
		component: MenuBertilleComponent
	});
	routes.push({
		path: 'menus/alice', 
		component: MenuAliceComponent
	});
	routes.push({
		path: 'menus/desserts', 
		component: DessertsComponent
	});

	routes.push({
		path: 'buffets', 
		component: BuffetsComponent
	});
	routes.push({
		path: 'buffets/jeanne', 
		component: BuffetJeanneComponent
	});
	routes.push({
		path: 'buffets/justine', 
		component: BuffetJustineComponent
	});
	routes.push({
		path: 'buffets/lina', 
		component: BuffetLinaComponent
	});
	routes.push({
		path: 'buffets/marie', 
		component: BuffetMarieComponent
	});
	routes.push({
		path: 'buffets/autre', 
		component: BuffetAutreComponent
	});
	routes.push({
		path: 'bar-epicerie', 
		component: BarEpicerieComponent
	});

	routes.push({
		path: 'contact', 
		component: ContactComponent
	});

	routes.push({ path: '',
		redirectTo: '/accueil',
		pathMatch: 'full'
	});
}



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
