import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-repas-ouvriers',
  templateUrl: './repas-ouvriers.component.html',
  styleUrls: ['./repas-ouvriers.component.scss']
})
export class RepasOuvriersComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Repas ouvrier la semaine";
	}
}