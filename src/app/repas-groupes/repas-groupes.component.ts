import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-repas-groupes',
  templateUrl: './repas-groupes.component.html',
  styleUrls: ['./repas-groupes.component.scss']
})
export class RepasGroupesComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Repas en groupe le week-end";
	}
}
