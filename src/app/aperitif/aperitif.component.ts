import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-aperitif',
  templateUrl: './aperitif.component.html',
  styleUrls: ['./aperitif.component.scss']
})
export class AperitifComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Apéritif";
	}
}
