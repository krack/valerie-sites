import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilFestyComponent } from './accueil-festy/accueil-festy.component';
import { AccueilGourmandsComponent } from './accueil-gourmands/accueil-gourmands.component';
import { AperitifComponent } from './aperitif/aperitif.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutresServicesComponent } from './autres-services/autres-services.component';
import { BarEpicerieComponent } from './bar-epicerie/bar-epicerie.component';
import { BuffetJeanneComponent } from './buffets/buffet-jeanne/buffet-jeanne.component';
import { BuffetJustineComponent } from './buffets/buffet-justine/buffet-justine.component';
import { BuffetLinaComponent } from './buffets/buffet-lina/buffet-lina.component';
import { BuffetMarieComponent } from './buffets/buffet-marie/buffet-marie.component';
import { BuffetsComponent } from './buffets/buffets.component';
import { ConceptFestyComponent } from './concept-festy/concept-festy.component';
import { ContactComponent } from './contact/contact.component';
import { MenuFestyComponent } from './menu-festy/menu-festy.component';
import { DessertsComponent } from './menus/desserts/desserts.component';
import { FromagesComponent } from './menus/fromages/fromages.component';
import { MenuAgatheComponent } from './menus/menu-agathe/menu-agathe.component';
import { MenuAliceComponent } from './menus/menu-alice/menu-alice.component';
import { MenuBertilleComponent } from './menus/menu-bertille/menu-bertille.component';
import { MenuLouiseComponent } from './menus/menu-louise/menu-louise.component';
import { NavigationFestyComponent } from './navigation-festy/navigation-festy.component';
import { NavigationGourmandsComponent } from './navigation-gourmands/navigation-gourmands.component';
import { RepasGroupesComponent } from './repas-groupes/repas-groupes.component';
import { RepasOuvriersComponent } from './repas-ouvriers/repas-ouvriers.component';
import { SaladesComponent } from './salades/salades.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilFestyComponent,
    ConceptFestyComponent,
    AperitifComponent,
    MenuFestyComponent,
    MenuLouiseComponent,
    FromagesComponent,
    MenuAgatheComponent,
    MenuBertilleComponent,
    MenuAliceComponent,
    DessertsComponent,
    BuffetsComponent,
    BuffetJeanneComponent,
    BuffetJustineComponent,
    BuffetLinaComponent,
    BuffetMarieComponent,
    SaladesComponent,
    AutresServicesComponent,
    ContactComponent,
    NavigationFestyComponent,
    NavigationGourmandsComponent,
    AccueilGourmandsComponent,
    RepasOuvriersComponent,
    BarEpicerieComponent,
    RepasGroupesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
