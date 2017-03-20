import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-autres-services',
  templateUrl: './autres-services.component.html',
  styleUrls: ['./autres-services.component.scss']
})
export class AutresServicesComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Autres services";
	}
}