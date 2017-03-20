import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';


@Component({
  selector: 'app-accueil-gourmands',
  templateUrl: './accueil-gourmands.component.html',
  styleUrls: ['./accueil-gourmands.component.scss']
})
export class AccueilGourmandsComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Restaurant";
	}
}
