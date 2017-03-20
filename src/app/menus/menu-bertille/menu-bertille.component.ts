import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';


@Component({
  selector: 'app-menu-bertille',
  templateUrl: './menu-bertille.component.html',
  styleUrls: ['./menu-bertille.component.scss']
})
export class MenuBertilleComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Menu Bertille";
	}
}
