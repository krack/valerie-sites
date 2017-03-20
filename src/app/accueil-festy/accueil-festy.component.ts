import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'accueil-festy',
  templateUrl: './accueil-festy.component.html',
  styleUrls: ['./accueil-festy.component.scss']
})
export class AccueilFestyComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Repas à la maison";
	}
}
